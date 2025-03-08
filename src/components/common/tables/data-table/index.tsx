'use client'

import React from 'react'

import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table'
import { Table } from '@/components/ui/table'
import DataTableBody from './body'
import DataTableHeader from './header'

type DataTableProps<TData> = {
  columns: ColumnDef<TData, any>[]
  data: TData[]
}

const DataTable = <TData,>({ columns, data }: DataTableProps<TData>) => {
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting
    }
  })

  return (
    <div className="overflow-x-auto rounded-md border border-gray-200">
      <Table>
        <DataTableHeader headerGroups={table.getHeaderGroups()} />
        <DataTableBody rows={table.getRowModel().rows} colSpan={columns.length} />
      </Table>
    </div>
  )
}

export default DataTable
