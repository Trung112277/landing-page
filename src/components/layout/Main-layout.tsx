import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarInset } from '../ui/sidebar';
import { SidebarMenuHeader } from '../feature/sidebar/Sidebar-menu-header';

export function MainLayout() {
  return (
    <SidebarProvider defaultOpen={true}>
      <SidebarMenuHeader />
      <SidebarInset>
        <Header />
        <main className="mt-[80px]">
          <Outlet />
        </main>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
