import { useState } from 'react';
import { H1 } from '../common/heading/H1';
import { LogoImage } from '../common/logo/Logo-image';
import { AuthButtons } from '../feature/auth/Auth-buttons';
import { NavHeader } from '../feature/nav/Nav-header';
import { NavigationProvider } from '../../context/NavigationContext';
import { SidebarButton } from '../feature/button/Sidebar-button';
import { Sidebar } from './Sidebar';
import { NavSidebar } from '../feature/nav/Nav-sidebar';

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="px-5 lg:px-10 py-3 md:py-5 flex justify-between items-center h-[60px] md:h-[80px] z-50 bg-background fixed top-0 w-full">
        <div className="flex items-center gap-4 lg:gap-6">
          <SidebarButton 
            isOpen={isSidebarOpen} 
            onToggle={setIsSidebarOpen} 
          />
          <H1>
            <a href="/landing-page/">
              <LogoImage />
            </a>
          </H1>
          <NavigationProvider>
            <NavHeader />
          </NavigationProvider>
        </div>
        <div className="flex items-center gap-4">
          <AuthButtons />
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen}>
          <NavigationProvider>
            <NavSidebar />
          </NavigationProvider>
      </Sidebar>
    </>
  );
}
