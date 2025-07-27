import { H1 } from '../common/heading/H1';
import { LogoImage } from '../common/logo/Logo-image';
import { AuthButtons } from '../feature/auth/Auth-buttons';
import { NavHeader } from '../feature/nav/Nav-header';
import { NavigationProvider } from '../../context/NavigationContext';
import { SidebarTrigger } from '../ui/sidebar';

export function Header() {
  return (
    <header className="px-10 py-5 flex justify-between items-center h-[80px] z-50 bg-background fixed top-0 w-full">
      <div className="flex items-center gap-[25px]">
        <SidebarTrigger />
        <H1>
          <a href="/landing-page/">
            <LogoImage />
          </a>
        </H1>
        <NavigationProvider>
          <NavHeader />
        </NavigationProvider>
      </div>
      <AuthButtons />
    </header>
  );
}
