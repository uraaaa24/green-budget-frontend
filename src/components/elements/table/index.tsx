import React from 'react'

const Table = () => {
  // TODO: tanstack table を使って、汎用的なテーブルコンポーネントを作成する
  return (
    <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
      <thead className="border-b border-gray-400 text-xs font-bold uppercase text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Product name
          </th>
          <th scope="col" className="px-6 py-3">
            Color
          </th>
          <th scope="col" className="px-6 py-3">
            Category
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
            Apple MacBook Pro 17
          </th>
          <td className="px-6 py-4">Silver</td>
          <td className="px-6 py-4">Laptop</td>
          <td className="px-6 py-4">$2999</td>
        </tr>
        <tr className="border-b">
          <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
            Microsoft Surface Pro
          </th>
          <td className="px-6 py-4">White</td>
          <td className="px-6 py-4">Laptop PC</td>
          <td className="px-6 py-4">$1999</td>
        </tr>
        <tr>
          <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
            Magic Mouse 2
          </th>
          <td className="px-6 py-4">Black</td>
          <td className="px-6 py-4">Accessories</td>
          <td className="px-6 py-4">$99</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
