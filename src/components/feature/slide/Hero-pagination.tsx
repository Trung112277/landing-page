type HeroPaginationProps = {
  total: number;
  current: number;
  onChange: (idx: number) => void;
  className?: string;
};

export function HeroPagination({
  total,
  current,
  onChange,
  className = '',
}: HeroPaginationProps) {
  return (
    <div className={`flex gap-2 justify-center ${className}`}>
      {Array.from({ length: total }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onChange(idx)}
          className={`w-7 h-1 rounded-full transition-all duration-300
              ${
                idx === current
                  ? 'bg-primary'
                  : 'bg-white/60 hover:bg-white/80'
              }
            `}
          aria-label={`Go to slide ${idx + 1}`}
        />
      ))}
    </div>
  );
}
