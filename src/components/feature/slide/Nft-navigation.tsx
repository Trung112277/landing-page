import { CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

export function NftNavigation() {
  return (
    <div className="absolute top-[-32px] right-[47px]  z-10">
      <div className="flex gap-2 items-center">
        <CarouselPrevious className="btn-navigation hover:text-primary" />
        <CarouselNext className="btn-navigation hover:text-primary" />
      </div>
    </div>
  );
}
