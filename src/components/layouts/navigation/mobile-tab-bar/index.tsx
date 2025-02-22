import { NAV_ITEMS } from '../constants/nav-items'
import MobileTabBarNavItem from './nav-item'

const MobileTabBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-primary-dark text-neutral-light">
      <ul className="flex justify-around p-4">
        {NAV_ITEMS.map((item) => (
          <MobileTabBarNavItem key={item.label} {...item} />
        ))}
      </ul>
    </nav>
  )
}

export default MobileTabBar
