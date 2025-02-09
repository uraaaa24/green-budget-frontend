import Header from '@/components/layouts/header'
import { getTransactions } from '@/features/transactions/api/transaction'
import TransactionTable from '@/features/transactions/components/tables/transaction-table'
import { Suspense } from 'react'

export default async function Transactions() {
  const result = await getTransactions()
  const transactions = await result.json()

  return (
    <section className="space-y-8">
      <Header label="Transactions" />

      <div className="space-y-6">
        <Suspense fallback={<div>Loading...</div>}>
          <TransactionTable transactions={transactions} />
        </Suspense>
      </div>
    </section>
  )
}
