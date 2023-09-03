import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Home() {
  return (
    <div>
      HOME
      {formatDistanceToNow(new Date('2023-09-02T11:48:32.455Z'), {
        addSuffix: true,
        locale: ptBR,
      })}
    </div>
  )
}
