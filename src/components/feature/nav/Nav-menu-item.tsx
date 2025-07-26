import { NavItem, NavItemProps } from './Nav-item';

export function NavMenuItem(props: NavItemProps) {
  return (
    <NavItem 
      {...props} 
      className="px-[18px] py-[10px] uppercase font-medium text-sm leading-5 transition-all duration-300 hover:text-primary hover:bg-accent hover:rounded-[100px]"
    />
  );
}
