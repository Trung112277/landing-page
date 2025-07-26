import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { NftNavigation } from './Nft-navigation';
import Autoplay from 'embla-carousel-autoplay';
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
  return (
    <div>
        <H2>{title}</H2>
      <Carousel
        opts={{ align: 'start', loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem key={item.id} className={`basis-1/${visible}`}>
              <img
                src={`${import.meta.env.BASE_URL}${item.image}`}
                alt={item.alt}
                className={`rounded-xl w-full h-[245px] object-cover ${imageClassName}`}
                draggable={false}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <NftNavigation />
      </Carousel>
    </div>
  );
}
