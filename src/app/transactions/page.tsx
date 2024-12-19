import TransactionTable from '@/features/transactions/transaction-table'
import TransactionForm from '@/features/transactions/transaction-form'

export default function Transactions() {
  return (
    <div className="space-y-4">
      <TransactionForm />
      <TransactionTable />
    </div>
  )
}
