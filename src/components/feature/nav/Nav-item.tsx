import { Link } from 'react-router-dom';

export interface NavItemProps {
  label: string;
  url: string;
  className?: string;
}

export function NavItem({
  label,
  url,
  className = 'font-normal text-sm leading-5 text-foreground hover:text-primary transition-all duration-300',
}: NavItemProps) {
  if (!label || !url) return null;
  return (
    <li>
      <Link to={url} aria-label={label} className={className}>
        {label}
      </Link>
    </li>
  );
}
