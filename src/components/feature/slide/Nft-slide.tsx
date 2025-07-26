import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { NftNavigation } from './Nft-navigation';
import { H2 } from '@/components/common/heading/H2';

export interface NftSlideItem {
  id: string;
  image: string;
  alt?: string;
}

interface NftSlideProps {
  data: NftSlideItem[];
  title?: string;
  visible: number;
  imageClassName?: string;
}

export function NftSlide({
  data,
  title = '',
  visible = 1,
  imageClassName = '',
}: NftSlideProps) {
  const width = visible === 1 ? '100%' : `${100 / visible}%`;
  
  return (
    <>
      <H2 className="line-clamp-1 pr-[100px]">{title}</H2>
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
