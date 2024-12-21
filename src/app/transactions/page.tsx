import AddTransactionDialog from '@/features/transactions/dialogs/add-transaction'
import TransactionTable from '@/features/transactions/tables/transaction-table'

export default function Transactions() {
  return (
    <div className="space-y-4">
      <AddTransactionDialog />
      <TransactionTable />
    </div>
  )
}
