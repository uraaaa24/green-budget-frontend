'use client'

import React from 'react'
import SidebarListItem from './list-item'
import { NAV_ITEMS } from '@/constants/nav-items'

const SideBar = () => {
  return (
    <aside
      className="fixed top-10 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full p-8">
        <ul className="space-y-4 font-medium">
          {NAV_ITEMS.map((item) => (
            <SidebarListItem key={item.label} {...item} />
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default SideBar
