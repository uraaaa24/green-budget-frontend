import { cx } from '@/utils'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'

type SidebarNavItemProps = {
  label: string
  href: string
  icon?: React.ReactNode
}

const SidebarNavItem = ({ label, href, icon }: SidebarNavItemProps) => {
  const pathname = usePathname()

  const isActive = useMemo(() => pathname === href, [pathname, href])

  return (
    <li>
      <a
        href={href}
        className={cx(
          'flex items-center gap-4 p-3 rounded-md transition-all outline-none border-l-4',
          isActive
            ? 'bg-primary text-neutral-light border-accent'
            : 'border-transparent text-neutral-dark hover:bg-primary-light focus:ring-2 focus:ring-primary-light'
        )}
      >
        <span className="flex-shrink-0 w-6 h-6 transition-opacity">{icon}</span>
        <span className="flex-1 truncate" title={label}>
          {label}
        </span>
      </a>
    </li>
  )
}

export default SidebarNavItem
