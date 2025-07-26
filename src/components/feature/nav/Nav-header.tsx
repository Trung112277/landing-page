import { useNavigation } from '../../../context/NavigationContext';
import { NavMenuList } from './Nav-menu-list';

export function NavHeader() {
  const { headerNav } = useNavigation();
  return (
    <div>
      <NavMenuList navItems={headerNav} />
    </div>
  );
}
  