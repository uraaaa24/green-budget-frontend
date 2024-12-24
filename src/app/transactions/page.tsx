import Header from '@/components/layouts/header'
import TransactionTable from '@/features/transactions/components/tables/transaction-table'
import { transactionService } from '@/features/transactions/services/transaction-service'

export default async function Transactions() {
  const transactions = await transactionService.getTransactions()

  return (
    <section className="space-y-8">
      <Header label="Transactions" />

      <div className="space-y-6">
        <TransactionTable transactions={transactions} />
      </div>
    </section>
  )
}
