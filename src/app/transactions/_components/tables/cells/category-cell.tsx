type CategoryCellProps = {
  category: string | null
}

export const CategoryCell = ({ category }: CategoryCellProps) => {
  if (!category) {
    return <span>No category</span>
  }

  return <span>{category}</span>
}
