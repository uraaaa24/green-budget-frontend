import TransactionTable from '@/features/transactions/transaction-table'
import AddTransactionDialog from '@/features/transactions/add-transaction-dialog'

export default function Transactions() {
  return (
    <div className="space-y-4">
      <AddTransactionDialog />
      <TransactionTable />
    </div>
  )
}
