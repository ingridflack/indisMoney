import iconImage from '../../assets/icon.png'

import { Container, Image, Text } from './styles'

const Logo = () => {
  return (
    <Container>
      <Image src={iconImage} alt="icon" />
      <Text>indis money</Text>
    </Container>
  )
}

export default Logo
