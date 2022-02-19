import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'

import SummaryCard from '../SummaryCard'

import { Container } from './styles'

const Summary = () => {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withdraws += transaction.amount
        acc.total -= transaction.amount
      }
      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  )

  return (
    <Container>
      <SummaryCard text="Entradas" image={incomeImg} value={summary.deposits} />
      <SummaryCard text="Saídas" image={outcomeImg} value={-summary.withdraws} />
      <SummaryCard className="highlight-background" text="Total" image={totalImg} value={summary.total} />
    </Container>
  )
}

export default Summary
