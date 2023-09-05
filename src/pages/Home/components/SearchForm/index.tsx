import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
// import { useContextSelector } from 'use-context-selector'
// import { TransactionsContext } from '../../../../contexts/TransactionsContext'
// import { memo } from 'react'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

// function SearchFormComponent() {
export function SearchForm() {
  // const fetchTransactions = useContextSelector(
  //   TransactionsContext,
  //   (context) => {
  //     return context.fetchTransactions
  //   },
  // )

  const {
    register,
    handleSubmit,
    // formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    // defaultValues: {}
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    // await fetchTransactions(data.query)
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
        onChange={(e) => {
          console.log(e.target.value)
        }}
      />
    </SearchFormContainer>
  )
}

// export const SearchForm = memo(SearchFormComponent)
