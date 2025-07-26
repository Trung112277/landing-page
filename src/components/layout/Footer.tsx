import { NavFooter } from '../feature/nav/Nav-footer';
import { NavigationProvider } from '../../context/NavigationContext';

export function Footer() {
  return (
    <footer className="border-t border-accent">
      <div className="container mx-auto my-10 px-5">
        <NavigationProvider>
          <NavFooter />
        </NavigationProvider>
      </div>
    </footer>
  );
}
