import { HeaderProps } from '../../types/types'
import Logo from '../Logo'
import { Container, Content } from './styles'

const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <Logo />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}

export default Header
