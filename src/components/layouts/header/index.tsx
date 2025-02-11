'use client'

import { useDateRange } from '@/contexts/date-range-context'
import { formattedDate } from '@/utils'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { ComponentProps } from 'react'

type HeaderProps = ComponentProps<'header'> & {
  label: string
}

const Header = ({ label, ...props }: HeaderProps) => {
  const { data } = useSession()
  const user = data?.user

  const { dateRange } = useDateRange()

  const dateRangeText = `${formattedDate(dateRange.startDate)} - ${formattedDate(dateRange.endDate)}`

  return (
    <header {...props} className="space-y-2">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">{label}</h1>
        <div className="flex items-center">
          {user?.image ? (
            // TODO: メニューに変更する
            <Image
              draggable={false}
              src={user.image}
              alt={`${user.name ?? 'ユーザー'}のプロフィール画像`}
              width={45}
              height={45}
              className="rounded-full"
            />
          ) : (
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-gray-600"
              aria-label="ユーザー画像なし"
            >
              {user?.name?.charAt(0)?.toUpperCase() ?? 'U'}
            </div>
          )}
        </div>
      </div>
      {/* TODO: 日付範囲を変えられるようにする */}
      <p className="text-gray-500">{dateRangeText}</p>
    </header>
  )
}

export default Header
