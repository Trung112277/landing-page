import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { NftNavigation } from './Nft-navigation';
import { H2 } from '@/components/common/heading/H2';
import { useResponsiveVisible } from '@/hooks/useResponsiveVisible';

export interface NftSlideItem {
  id: string;
  image: string;
  alt?: string;
}

interface NftSlideProps {
  data: NftSlideItem[];
  title?: string;
  visible: number;
  visiblemb?: number; 
  visiblemd?: number; 
  visiblelg?: number; 
  visiblexl?: number; 
  imageClassName?: string;
}

export function NftSlide({
  data,
  title = '',
  visible,
  visiblemb,
  visiblemd,
  visiblelg,
  visiblexl,
  imageClassName = '',
}: NftSlideProps) {
  const currentVisible = useResponsiveVisible({
    visible,
    visiblemb,
    visiblemd,
    visiblelg,
    visiblexl,
  });

  const width = currentVisible === 1 ? '100%' : `${100 / currentVisible}%`;
  
  return (
    <>
      <H2 className=" md:pr-[100px] pr-[75px]">{title}</H2>
      <Carousel opts={{ align: 'start', loop: true }} className="w-full">
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem 
              key={item.id} 
              style={{ 
                flex: `0 0 ${width}`, 
                maxWidth: width 
              }}
            >
              <div className="w-full">
                <img
                  src={`${import.meta.env.BASE_URL}${item.image}`}
                  alt={item.alt}
                  className={`rounded-xl w-full block ${imageClassName}`}
                  draggable={false}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <NftNavigation />
      </Carousel>
    </>
  );
}
