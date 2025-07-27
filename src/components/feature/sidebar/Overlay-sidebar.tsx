import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  className?: string;
  zIndex?: number;
}

export function Overlay({ 
  isOpen, 
  onClose, 
  children, 
  className = '',
  zIndex = 30 
}: OverlayProps) {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        'fixed top-[60px] md:top-[80px] left-0 right-0 bottom-0 bg-black/50',
        className
      )}
      style={{ zIndex }}
      onClick={onClose}
    >
      {children}
    </div>
  );
} 