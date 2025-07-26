import React from 'react';
import { type CarouselApi } from '@/components/ui/carousel';

interface UseCarouselReturn {
  api: CarouselApi | undefined;
  setApi: React.Dispatch<React.SetStateAction<CarouselApi | undefined>>;
  current: number;
  handlePaginationClick: (index: number) => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
}

export function useCarousel(): UseCarouselReturn {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  const handlePaginationClick = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  const handleKeyDown = React.useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
    }
  }, []);

  return {
    api,
    setApi,
    current,
    handlePaginationClick,
    handleKeyDown,
  };
} 