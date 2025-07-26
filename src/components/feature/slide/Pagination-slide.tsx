interface PaginationSlideProps {
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
  className?: string;
}

export function PaginationSlide({ 
  totalSlides, 
  currentSlide, 
  onSlideChange,
  className = "" 
}: PaginationSlideProps) {
  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`h-1 w-7 rounded-full transition-all duration-300 ${
            index === currentSlide
              ? 'bg-primary'
              : 'bg-white/60 hover:bg-white/80' 
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}