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
      className="flex flex-col justify-start md:justify-center items-center text-center md:leading-5 w-[60px] h-[65px] md:w-auto leading-3 font-medium text-[10px] md:text-sm text-white  gap-3 uppercase transition-all duration-300 hover:text-primary relative"
    >
      <div className="relative">
        <img
          src={`${import.meta.env.BASE_URL}${icon}`}
          alt={alt}
          className="md:w-[42px] w-[28px] h-[28px] md:h-[42px]"
        />
        {isNew && (
          <Badge
            variant="destructive"
            className="px-[3px] md:px-[6px] py-[1px] md:py-[2px] md:text-xs text-[5px] leading-[8px] md:leading-4 font-medium text-white hover:bg-unset absolute right-0 translate-x-1/2 top-0 -translate-y-1/2 rounded"
          >
            new
          </Badge>
        )}
      </div>
      {label}
    </Link>
  );
}
