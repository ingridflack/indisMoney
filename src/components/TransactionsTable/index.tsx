import { useTransactions } from '../../hooks/useTransactions'

import { Container } from './styles'

const TransactionsTable = () => {
  const { transactions } = useTransactions()

  return (
    <Container>
      <table>
        <thead>
          <tr className="column-title">
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr className="table-content" key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}

export default TransactionsTable
