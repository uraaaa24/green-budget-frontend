import SignOutButton from '@/components/common/buttons/signout-button'
import { NAV_ITEMS } from '../constants/nav-items'
import SidebarNavItem from './nav-item'

const Sidebar = () => {
  return (
    <aside
      className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full bg-primary-dark text-neutral-light transition-transform sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full p-8 pt-20">
        <ul className="space-y-4 font-medium">
          {NAV_ITEMS.map((item) => (
            <SidebarNavItem key={item.label} {...item} />
          ))}

          <SignOutButton />
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
