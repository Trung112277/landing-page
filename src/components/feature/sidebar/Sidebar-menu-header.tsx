import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
} from '@/components/ui/sidebar';
import { NavSidebar } from '../nav/Nav-sidebar';
import { NavigationProvider } from '@/context/NavigationContext';

export function SidebarMenuHeader() {
  return (
    <Sidebar className=" w-full max-w-[400px]" variant="overlay">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className='pt-[80px]'>
            <NavigationProvider>
              <NavSidebar />
            </NavigationProvider>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
