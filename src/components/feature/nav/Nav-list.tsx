import { NavItem, NavItemProps } from './Nav-item';

interface NavListProps {
  navItems: NavItemProps[];
  className?: string;
  ItemComponent?: React.ComponentType<NavItemProps>;
}

export function NavList({ 
  navItems, 
  className = "flex flex-col gap-2",
  ItemComponent = NavItem 
}: NavListProps) {
  if (!navItems || navItems.length === 0) return null;
  return (
    <nav>
      <ul className={className}>
        {navItems.map((item, idx) => (
          <ItemComponent key={idx} {...item} />
        ))}
      </ul>
    </nav>
  );
}
