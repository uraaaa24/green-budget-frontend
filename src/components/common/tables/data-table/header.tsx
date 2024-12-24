import { TableHeader, TableRow, TableHead } from '@/components/ui/table'
import { flexRender, HeaderGroup } from '@tanstack/react-table'

const DataTableHeader = <TData,>({ headerGroups }: { headerGroups: HeaderGroup<TData>[] }) => {
  return (
    <TableHeader>
      {headerGroups.map((headerGroup) => (
        <TableRow key={headerGroup.id} className="h-12 bg-gray-100 hover:bg-gray-100">
          {headerGroup.headers.map((header) => {
            return (
              <TableHead key={header.id} className="px-6">
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            )
          })}
        </TableRow>
      ))}
    </TableHeader>
  )
}

export default DataTableHeader
