import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

interface ServiceCardItemProps {
  icon: string;
  alt: string;
  label: string;
  to: string;
  new?: boolean;
}

export function ServiceCardItem({
  icon,
  alt,
  label,
  to,
  new: isNew = false,
}: ServiceCardItemProps) {
  return (
    <Link
      to={to}
      className="flex flex-col items-center leading-5 font-medium text-sm text-white justify-center gap-3 uppercase transition-all duration-300 hover:text-primary relative"
    >
      <div className="relative">
        <img src={`${import.meta.env.BASE_URL}${icon}`} alt={alt} />
        {isNew && (
          <Badge
            variant="destructive"
            className="px-[6px] py-[2px] text-[12px] leading-4 font-medium text-white hover:bg-unset absolute right-0 translate-x-1/2 top-0 -translate-y-1/2 rounded"
          >
            new
          </Badge>
        )}
      </div>
      {label}
    </Link>
  );
}
