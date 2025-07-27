import { useNavigation } from '../../../context/NavigationContext';
import { NavList } from './Nav-list';

export function NavHeader() {
  const { headerNav } = useNavigation();
  
  return (
    <nav>
      <ul className="flex items-center">
        <NavList 
          navItems={headerNav}
          itemClassName="w-[80px] h-[40px] content-center text-center uppercase font-medium hover:bg-accent hover:rounded-[100px]"
        />
      </ul>
    </nav>
  );
}
