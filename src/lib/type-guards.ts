export const isString = (value: unknown): value is string => typeof value === 'string'

export const isError = (value: unknown): value is Error => value instanceof Error
