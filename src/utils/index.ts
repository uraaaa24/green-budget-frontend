export const formatMonthRange = (date: Date): string => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const displayText = `${firstDay.toLocaleDateString()} - ${lastDay.toLocaleDateString()}`

  return displayText
}
