import Header from '@/components/layouts/header'
import AddTransactionDialog from '@/features/transactions/dialogs/add-transaction'
import TransactionTable from '@/features/transactions/tables/transaction-table'

export default function Transactions() {
  return (
    <section className="space-y-8">
      <Header label="Transactions" />

      <div className="space-y-6">
        <AddTransactionDialog />
        <TransactionTable />
      </div>
    </section>
  )
}
