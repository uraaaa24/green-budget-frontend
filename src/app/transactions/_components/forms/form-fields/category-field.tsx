import { useGetCategory } from '@/app/transactions/_hooks/use-get-category'
import { BaseFormField } from '@/components/common/forms/form-field'
import BaseSelect from '@/components/common/forms/select'
import { useFormContext } from 'react-hook-form'

export const CategoryField = () => {
  const { control, getValues } = useFormContext()

  const { data, error, isLoading } = useGetCategory()

  const getCategoryOptions = () => {
    const transactionType = getValues('transaction_type')
    if (!Array.isArray(data)) return []

    return data
      .filter((category) => category.transaction_type === transactionType)
      .map((category) => ({
        value: category.id.toString(),
        label: category.name
      }))
  }
  const options = getCategoryOptions()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading categories</div>

  return (
    <BaseFormField
      name="category_id"
      control={control}
      label="Category"
      required
      renderContent={(field) => {
        const { value, onChange, ...rest } = field
        return (
          <BaseSelect
            {...rest}
            options={options}
            value={value !== null ? value.toString() : ''}
            onChange={(val) => onChange(Number(val))}
          />
        )
      }}
    />
  )
}
