import Header from '@/components/layouts/header'
import { getTransactions } from '@/app/transactions/_api/transaction'
import TransactionTable from '@/app/transactions/_components/tables/transaction-table'
import { Suspense } from 'react'
import { auth } from '@/lib/next-auth'
import { getAuthHeaders } from '@/lib/api'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transactions',
  description: 'Transactions page'
}

export default async function Transactions() {
  const session = await auth()
  const authHeaders = await getAuthHeaders(session)
  const result = await getTransactions(authHeaders)
  const transactions = await result.json()

  return (
    <section className="space-y-8">
      <Header label="家計簿" />

      <div className="space-y-6">
        <Suspense fallback={<div>Loading...</div>}>
          <TransactionTable transactions={transactions} />
        </Suspense>
      </div>
    </section>
  )
}
