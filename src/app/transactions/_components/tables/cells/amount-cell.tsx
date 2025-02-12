import { TransactionType, TRANSACTION_TYPES } from '@/app/transactions/_schemas/validation'

const ExpenseAmountCell = ({ amount }: { amount: number }) => {
  return (
    <span className="rounded-full border-red-400 bg-red-100 px-3 py-2 font-bold text-red-800/70">
      -{amount}
    </span>
  )
}

const IncomeAmountCell = ({ amount }: { amount: number }) => {
  return (
    <span className="rounded-full border-blue-400 bg-blue-100 px-3 py-2 font-bold text-blue-800/70">
      {amount}
    </span>
  )
}

type AmountCellProps = {
  transactionType: TransactionType
  amount: number
}

export const AmountCell = ({ transactionType, amount }: AmountCellProps) => {
  return transactionType === TRANSACTION_TYPES.expense ? (
    <ExpenseAmountCell amount={amount} />
  ) : (
    <IncomeAmountCell amount={amount} />
  )
}
