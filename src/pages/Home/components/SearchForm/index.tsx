import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { IssuesContext } from '../../../../contexts/IssuesContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchIssues = useContextSelector(IssuesContext, (context) => {
    return context.fetchIssues
  })

  const {
    register,
    handleSubmit,
    setValue,
    // formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    // defaultValues: {}
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query)
  }

  const handleChange = async (e) => {
    const query = e.target.value
    await fetchIssues(query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query', {
          onChange: (e) => {
            handleChange(e)
          },
        })}
        // disabled={isSubmitting}
      />
      {/* <button
        type="submit"
        style={{ width: '4rem', cursor: 'pointer' }}
      ></button> */}
    </SearchFormContainer>
  )
}

// export const SearchForm = memo(SearchFormComponent)
