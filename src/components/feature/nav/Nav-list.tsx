import { NavItem, NavItemProps } from './Nav-item';

interface NavListProps {
  navItems: NavItemProps[];
  itemClassName?: string;
  containerClassName?: string;
}

export function NavList({
  navItems,
  itemClassName,
  containerClassName,
}: NavListProps) {
  if (!navItems || navItems.length === 0) return null;

  return (
    <>
      {' '}
      {navItems.map((item, idx) => (
        <li className={containerClassName}>
          <NavItem key={idx} {...item} className={itemClassName} />
        </li>
      ))}
    </>
  );
}
