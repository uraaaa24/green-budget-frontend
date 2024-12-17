export const cx = (...classNames: (string | boolean | undefined | null)[]): string => {
  return classNames.filter(Boolean).join(' ')
}
