import { useState, useCallback } from 'react';
import { HERO_SLIDES } from '../constant/hero-slides';

interface UseHeroSliderReturn {
  currentSlide: number;
  totalSlides: number;
  slides: typeof HERO_SLIDES;
  handleSlideChange: (swiper: any) => void;
  goToSlide: (index: number) => void;
  goToNext: () => void;
  goToPrevious: () => void;
  isFirstSlide: boolean;
  isLastSlide: boolean;
}

export function useHeroSlider(): UseHeroSliderReturn {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = HERO_SLIDES.length;

  const handleSlideChange = useCallback((swiper: any) => {
    setCurrentSlide(swiper.activeIndex);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  }, [totalSlides]);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === totalSlides - 1;

  return {
    currentSlide,
    totalSlides,
    slides: HERO_SLIDES,
    handleSlideChange,
    goToSlide,
    goToNext,
    goToPrevious,
    isFirstSlide,
    isLastSlide,
  };
} 