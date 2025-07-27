import { Link } from 'react-router-dom';
import { cn } from '../../../lib/utils';

export interface NavItemProps {
  label: string;
  url: string;
  className?: string;
}

export function NavItem({
  label,
  url,
  className,
}: NavItemProps) {
  if (!label || !url) return null;
  
  return (
      <Link 
        to={url} 
        aria-label={label} 
        className={cn(
          'block text-sm leading-5 transition-all duration-300 hover:text-primary',
          className
        )}
      >
        {label}
      </Link>
  );
}
