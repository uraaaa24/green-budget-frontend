'use client'

import { useMobile } from '@/hooks/use-mobile'
import { createContext, useContext } from 'react'

const ResponsiveLayoutContext = createContext<{ isMobile: boolean }>({ isMobile: false })

export const ResponsiveLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMobile()

  return (
    <ResponsiveLayoutContext.Provider value={{ isMobile }}>
      {children}
    </ResponsiveLayoutContext.Provider>
  )
}

export const useResponsiveLayout = () => useContext(ResponsiveLayoutContext)
