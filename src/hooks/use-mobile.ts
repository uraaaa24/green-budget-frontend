import { useEffect, useState } from 'react'

const MOBILE_BREAKPOINT = 640

/**
 * Hook to determine if the current screen size is mobile
 */
export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    window.addEventListener('resize', checkScreenSize)
    checkScreenSize()
  }, [])

  return isMobile
}
