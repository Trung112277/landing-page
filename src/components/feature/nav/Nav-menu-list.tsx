import { NavList } from './Nav-list';
import { NavMenuItem } from './Nav-menu-item';
import { NavItemProps } from './Nav-item';

interface NavMenuListProps {
  navItems: NavItemProps[];
}

export function NavMenuList({ navItems }: NavMenuListProps) {
  return (
    <NavList 
      navItems={navItems} 
      className="flex items-center"
      ItemComponent={NavMenuItem}
    />
  );
}