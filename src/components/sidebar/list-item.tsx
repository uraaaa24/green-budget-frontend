import { cx } from '@/utils'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'

type SidebarListItemProps = {
  label: string
  href: string
  icon?: React.ReactNode
}

const SidebarListItem = ({ label, href, icon }: SidebarListItemProps) => {
  const pathname = usePathname()

  const isActive = useMemo(() => pathname === href, [pathname, href])

  return (
    <li>
      <a
        href={href}
        className={cx(
          'flex items-center gap-4 p-3 rounded-md transition-all',
          isActive
            ? 'bg-primary text-neutral'
            : 'text-text-light hover:bg-primary-light hover:text-neutral focus:ring-primary'
        )}
      >
        <span className="flex-shrink-0 w-6 h-6">{icon}</span>
        <span className="flex-1 truncate" title={label}>
          {label}
        </span>
      </a>
    </li>
  )
}

export default SidebarListItem
