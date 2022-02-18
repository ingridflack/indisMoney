import { FormEvent, useState } from 'react'

import Modal from 'react-modal'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import closeImg from '../../assets/close.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}
const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
  const [type, setType] = useState('deposit')

  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  const handleCreateNewTransaction = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-modal-close" type="button" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2> Cadastrar nova transação</h2>

        <input placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />

        <input placeholder="Valor" type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />

        <TransactionTypeContainer>
          <RadioBox type="button" onClick={() => setType('deposit')} isActive={type === 'deposit'} activeColor="green">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox type="button" onClick={() => setType('withdraw')} isActive={type === 'withdraw'} activeColor="red">
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" value={category} onChange={(e) => setCategory(e.target.value)} />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}

export default NewTransactionModal
