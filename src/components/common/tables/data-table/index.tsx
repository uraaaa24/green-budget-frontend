'use client'

import React from 'react'

import { ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { Table } from '@/components/ui/table'
import DataTableBody from './body'
import DataTableHeader from './header'

type DataTableProps<TData> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<TData, any>[]
  data: TData[]
}

const DataTable = <TData,>({ columns, data }: DataTableProps<TData>) => {
  const table = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
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
