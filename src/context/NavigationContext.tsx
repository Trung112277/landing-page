import { createContext, useContext, ReactNode } from 'react';
import { NAV_FOOTER } from '../constant/nav-footer';
import { NAV_MENU_HEADER } from '../constant/nav-menu-header';

interface NavItemProps {
  label: string;
  url: string;
}

interface NavigationContextType {
  headerNav: NavItemProps[];
  footerNav: typeof NAV_FOOTER;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

interface NavigationProviderProps {
  children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const value: NavigationContextType = {
    headerNav: NAV_MENU_HEADER,
    footerNav: NAV_FOOTER,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
} 