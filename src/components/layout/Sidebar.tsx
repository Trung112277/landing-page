import { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Overlay } from '../feature/sidebar/Overlay-sidebar';

interface SidebarProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function Sidebar({ children, isOpen, onClose, className }: SidebarProps) {
  return (
    <>
      <Overlay isOpen={isOpen} onClose={onClose} />
      <aside
        className={cn(
          'fixed top-[60px] md:top-[80px] left-0 h-full w-full md:w-80 bg-sidebar shadow-lg transition-transform duration-300 ease-in-out z-40',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          className
        )}
      >
        <div className="p-5 h-full overflow-y-auto">{children}</div>
      </aside>
    </>
  );
}
