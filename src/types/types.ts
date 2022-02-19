import { HTMLAttributes, ReactNode } from 'react'

export interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export interface SummaryCardProps extends HTMLAttributes<HTMLDivElement> {
  text: string
  image: string
  value: number
}

export interface Transaction {
  id: number
  title: string
  category: string
  type: string
  amount: number
  createdAt: string
}

export type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

export interface TransactionProviderProps {
  children: ReactNode
}

export interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}
