import React, { ReactNode } from 'react'
import { ControllerRenderProps, FieldValues, UseControllerProps } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

export type BaseFormFieldProps<T extends FieldValues> = UseControllerProps<T> & {
  label: string
  renderContent: (field: ControllerRenderProps<T>) => ReactNode
  required?: boolean
}

export function BaseFormField<S extends FieldValues>({
  name,
  control,
  label,
  required,
  renderContent
}: BaseFormFieldProps<S>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>
            {label}
            {required && <span className="ml-0.5 text-accent">*</span>}
          </FormLabel>
          <FormControl>{renderContent(field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
