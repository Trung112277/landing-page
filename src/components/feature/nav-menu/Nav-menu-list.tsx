import { NavMenuItem, NavItemProps } from './Nav-menu-tem';

interface NavMenuListProps {
  navItems: NavItemProps[];
}

export function NavMenuList({ navItems }: NavMenuListProps) {
  if (!navItems || navItems.length === 0) return null;
  return (
    <nav>
      <ul className='flex items-center'>
        {navItems.map((item, idx) => (
          <NavMenuItem key={idx} {...item} />
        ))}
      </ul>
    </nav>
  );
}