import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { PaginationSlide } from './Pagination-slide';
import { useHeroSlider } from '../../../hooks/useHeroSlider';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

export function HeroSlide() {
  const { currentSlide, totalSlides, slides, handleSlideChange } =
    useHeroSlider();
  
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePaginationClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="relative">
      <Swiper 
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]} 
        className="mySwiper"
        onSlideChange={handleSlideChange}
        initialSlide={currentSlide}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={`${import.meta.env.BASE_URL}${slide.image}`}
                alt={slide.alt}
                className="w-full h-[450px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <PaginationSlide
          totalSlides={totalSlides}
          currentSlide={currentSlide}
          onSlideChange={handlePaginationClick}
          className=" backdrop-blur-sm px-4 py-2 rounded-full"
        />
      </div>
    </div>
  );
}
