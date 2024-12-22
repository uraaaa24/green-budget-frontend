import Header from '@/components/layouts/header'
import AddTransactionDialog from '@/features/transactions/components/dialogs/add-transaction'
import TransactionTable from '@/features/transactions/components/tables/transaction-table'

export default async function Transactions() {
  return (
    <section className="space-y-8">
      <Header label="Transactions" />

      <div className="space-y-6">
        <div className="flex justify-end">
          <AddTransactionDialog />
        </div>
        <TransactionTable />
      </div>
    </section>
  )
}
