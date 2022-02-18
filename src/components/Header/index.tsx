import logoImg from '../../assets/logo.svg'
import Logo from '../Logo'
import { Container, Content } from './styles'

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  )
}

export default Header
