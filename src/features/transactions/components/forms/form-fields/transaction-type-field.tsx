import { BaseFormField } from '@/components/common/forms/form-field'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const TransactionTypeField = () => {
  const { control } = useFormContext()

  return (
    <BaseFormField
      name="transactionType"
      control={control}
      label="Type"
      required
      renderContent={(field) => (
        <RadioGroup
          value={field.value}
          onValueChange={(value) => field.onChange(value)}
          className="flex space-x-4"
        >
          <Label
            htmlFor="expense"
            className={cn(
              'cursor-pointer rounded-md border p-2 transition-colors',
              field.value === 'expense'
                ? 'border-red-400 bg-red-100 text-red-800'
                : 'border-gray-300 text-gray-500 hover:border-red-300 hover:bg-red-50 hover:text-red-800/70'
            )}
          >
            <RadioGroupItem value="expense" id="expense" className="hidden" />
            Expense
          </Label>
          <Label
            htmlFor="income"
            className={cn(
              'cursor-pointer rounded-md border p-2 transition-colors',
              field.value === 'income'
                ? 'border-blue-400 bg-blue-100 text-blue-800'
                : 'border-gray-300 text-gray-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800/70'
            )}
          >
            <RadioGroupItem value="income" id="income" className="hidden" />
            Income
          </Label>
        </RadioGroup>
      )}
    />
  )
}

export default TransactionTypeField
