import React from 'react';
import { HERO_SLIDES } from '../../../constant/hero-slides';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { HeroPagination } from './Hero-pagination';
import { useCarousel } from '../../../hooks/useCarousel';

export function HeroSlide() {
  const { api, setApi, current, handlePaginationClick, handleKeyDown } = useCarousel();

  return (
      <Carousel
        setApi={setApi}
        opts={{ align: 'start', loop: true }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full"
        onKeyDownCapture={handleKeyDown}
      >
        <CarouselContent className="-ml-0">
          {HERO_SLIDES.map((slide) => (
            <CarouselItem key={slide.id} className="pl-0">
              <div className="relative w-full h-[450px] overflow-hidden rounded-xl">
                <img
                  src={`${import.meta.env.BASE_URL}${slide.image}`}
                  alt={slide.alt}
                  className="w-full h-full block"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <HeroPagination
        total={HERO_SLIDES.length}
        current={current}
        onChange={handlePaginationClick}
        className='absolute bottom-3 left-1/2 -translate-x-1/2'
      />
      </Carousel>
  );
}
