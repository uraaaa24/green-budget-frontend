import { TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Row, flexRender } from '@tanstack/react-table'

const MIN_ROW = 10

const DataTableBody = <TData,>({ rows, colSpan }: { rows: Row<TData>[]; colSpan: number }) => {
  const emptyRows = Math.max(MIN_ROW - rows.length, 0)

  return (
    <TableBody>
      {rows.length !== 0 && (
        <>
          {rows.map((row) => (
            <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'} className="h-14">
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="px-6">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
          {Array.from({ length: emptyRows }).map((_, index) => (
            <TableRow key={`empty-${index}`} className="h-14 border-none hover:bg-transparent">
              <TableCell colSpan={colSpan}></TableCell>
            </TableRow>
          ))}
        </>
      )}

      {!rows.length && (
        <TableRow>
          <TableCell colSpan={colSpan} className="h-24 text-center text-sm italic text-gray-600">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  )
}

export default DataTableBody
