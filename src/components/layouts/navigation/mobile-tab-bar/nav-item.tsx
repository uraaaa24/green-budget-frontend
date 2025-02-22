'use client'

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'
import Link from 'next/link'

type MobileTabBarNavItemProps = {
  label: string
  href: string
  icon?: React.ReactNode
}

const MobileTabBarNavItem = ({ href, icon, label }: MobileTabBarNavItemProps) => {
  const pathname = usePathname()
  const isActive = useMemo(() => pathname === href, [pathname, href])

  return (
    <li>
      <Link
        href={href}
        className={cn(
          'relative flex flex-col items-center px-6 py-2',
          'transition-colors duration-200 ease-in-out'
        )}
        aria-current={isActive ? 'page' : undefined}
      >
        {/* icon */}
        <span
          className={cn(
            'h-6 w-6',
            'transition-transform duration-200 ease-in-out',
            isActive ? 'translate-y-[2px] text-accent' : 'text-neutral-dark/90'
          )}
        >
          {icon}
        </span>

        {/* label */}
        <span
          className={cn(
            'mt-1 text-[10px] font-medium',
            'transition-opacity duration-200 ease-in-out',
            isActive ? 'text-accent opacity-100' : 'text-neutral-dark/90'
          )}
        >
          {label}
        </span>

        {/* active indicator */}
        {isActive && (
          <span className="absolute -top-0.5 h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
        )}
      </Link>
    </li>
  )
}

export default MobileTabBarNavItem
