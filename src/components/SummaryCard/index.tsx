import { Container } from './styles'

interface SummaryCardProps {
  text: string
  image: string
  value: number
  className?: string
}
const SummaryCard = ({ text, image, value, className }: SummaryCardProps) => {
  return (
    <Container className={className}>
      <header>
        <p>{text}</p>
        <img src={image} alt={text} />
      </header>
      <strong>R${value}</strong>
    </Container>
  )
}

export default SummaryCard
