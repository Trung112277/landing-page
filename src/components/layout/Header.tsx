import { H1 } from '../common/heading/H1';
import { LogoImage } from '../common/logo/Logo-image';
import { AuthButtons } from '../feature/auth/Auth-buttons';
import { NavMenuHeader } from '../feature/nav-menu/Nav-menu-header';

export function Header() {
  return (
    <header className="px-[40px] py-[20px] flex justify-between items-center h-[80px]">
      <div className="flex items-center gap-[25px]">
        <H1>
          <a href="/">
            <LogoImage />
          </a>
        </H1>
        <NavMenuHeader />
      </div>
      <AuthButtons />
    </header>
  );
}
