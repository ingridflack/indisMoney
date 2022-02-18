import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import SummaryCard from '../SummaryCard'

import { Container } from './styles'

const Summary = () => {
  return (
    <Container>
      <SummaryCard text="Entradas" image={incomeImg} value={1000} />
      <SummaryCard text="Saídas" image={outcomeImg} value={500} />
      <SummaryCard className="highlight-background" text="Total" image={totalImg} value={500} />
    </Container>
  )
}

export default Summary
