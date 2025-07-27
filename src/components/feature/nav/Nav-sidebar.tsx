import { useNavigation } from '../../../context/NavigationContext';
import { NavList } from './Nav-list';

export function NavSidebar() {
  const { headerNav } = useNavigation();
  
  return (
    <nav>
      <ul className="flex flex-col gap-5">
        <NavList 
          navItems={headerNav} 
          itemClassName="w-full h-[48px] content-center text-center uppercase font-medium hover:bg-accent hover:rounded-[100px]"
          containerClassName="flex flex-col gap-5"
        />
      </ul>
    </nav>
  );
}
