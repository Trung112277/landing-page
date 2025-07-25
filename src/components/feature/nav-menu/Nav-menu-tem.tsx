import { Link } from 'react-router-dom';

export interface NavItemProps {
  label: string;
  url: string;
}

export function NavMenuItem({ label, url }: NavItemProps) {
  if (!label || !url) return null;
  return (
    <li>
      <Link
        to={url}
        aria-label={label}
        className="px-[18px] py-[10px] uppercase font-medium text-sm leading-5 transition-all duration-300 hover:text-primary hover:bg-accent hover:rounded-[100px]"
      >
        {label}
      </Link>
    </li>
  );
}
