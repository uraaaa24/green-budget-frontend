'use client'

import React from 'react'
import SidebarNavItem from './nav-item'
import { NAV_ITEMS } from '@/components/layouts/sidebar/constants/nav-items'

const SideBar = () => {
  return (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-primary-dark text-neutral-light"
      aria-label="Sidebar"
    >
      <div className="h-full pt-20 p-8">
        <ul className="space-y-4 font-medium">
          {NAV_ITEMS.map((item) => (
            <SidebarNavItem key={item.label} {...item} />
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default SideBar
