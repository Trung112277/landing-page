import { CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

export function NftNavigation() {
  return (
    <div className="absolute md:top-[-32px] top-[-25px] md:right-[47px] right-[36px] z-10">
      <div className="flex gap-2 items-center">
        <CarouselPrevious className="btn-navigation md:-left-11 -left-9" />
        <CarouselNext className="btn-navigation md:-right-11 -right-9" />
      </div>
    </div>
  );
}
