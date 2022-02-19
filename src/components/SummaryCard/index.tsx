import { HTMLAttributes } from 'react'
import { Container } from './styles'

interface SummaryCardProps extends HTMLAttributes<HTMLDivElement> {
  text: string
  image: string
  value: number
}

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
