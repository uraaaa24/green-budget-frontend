'use client'

import React from 'react'
import { useResponsiveLayout } from '@/providers/responsive-layout-provider'
import Sidebar from './sidebar'
import MobileTabBar from './mobile-tab-bar'

const Navigation = () => {
  const { isMobile } = useResponsiveLayout()

  if (isMobile) {
    return <MobileTabBar />
  }

  return <Sidebar />
}

export default Navigation
