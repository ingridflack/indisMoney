import { SummaryCardProps } from '../../types/types'
import { Container } from './styles'

const SummaryCard = ({ className, text, image, value }: SummaryCardProps) => {
  return (
    <Container className={className}>
      <header>
        <p>{text}</p>
        <img src={image} alt={text} />
      </header>
      <strong>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(value)}
      </strong>
    </Container>
  )
}

export default SummaryCard
