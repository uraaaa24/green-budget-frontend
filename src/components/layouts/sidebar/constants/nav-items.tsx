import { LayoutDashboard, ArrowRightLeft, ChartLine, Settings } from 'lucide-react'
import { ReactNode } from 'react'

export type NavItem = {
  label: string
  href: string
  icon: ReactNode
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard /> },
  { label: 'Transactions', href: '/transactions', icon: <ArrowRightLeft /> },
  { label: 'Statistics', href: '/statistics', icon: <ChartLine /> },
  { label: 'Settings', href: '/settings', icon: <Settings /> }
]
