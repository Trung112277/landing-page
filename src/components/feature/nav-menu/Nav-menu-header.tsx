import { NAV_MENU_HEADER } from '../../../constant/nav-menu-header';
import { NavMenuList } from './Nav-menu-list';

export function NavMenuHeader() {
  const navItems = NAV_MENU_HEADER;
  return (
    <div>
      <NavMenuList navItems={navItems} />
    </div>
  );
}
