import { LayoutDashboard, ArrowRightLeft, ChartLine, Settings } from 'lucide-react'
import { ReactNode } from 'react'

export type NavItem = {
  label: string
  href: string
  icon: ReactNode
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'ダッシュボード', href: '/dashboard', icon: <LayoutDashboard /> },
  { label: '家計簿', href: '/transactions', icon: <ArrowRightLeft /> },
  { label: '統計', href: '/statistics', icon: <ChartLine /> },
  { label: '設定', href: '/settings', icon: <Settings /> }
]
