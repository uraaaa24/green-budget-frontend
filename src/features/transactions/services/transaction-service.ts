import { getTransactions as _getTransactions } from '../api/transaction-api'
import { Transaction } from '../schemas/type'

export const transactionService = {
  async getTransactions(): Promise<Transaction[]> {
    const transitions = await _getTransactions()

    return transitions.map((transaction) => ({
      ...transaction,
      date: new Date(transaction.date).toLocaleDateString()
    }))
  }
}
