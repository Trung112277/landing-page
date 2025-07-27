import { HotNftCard } from '@/components/common/card/Hot-nft-card';
import { PromotionCard } from '@/components/common/card/Promotion-card';
import { ServiceCardList } from '@/components/feature/nav/Service-card-List';
import { HeroSlide } from '@/components/feature/slide/Hero-slide';
import { NewNftSlide } from '@/components/feature/slide/New-nft-slide';
import { NftDropsCalendarSlide } from '@/components/feature/slide/Nft-drops-calendar-slide';

export function Home() {
  return (
    <>
      <section>
        <HeroSlide />
      </section>
      <section className="bg-primary-foreground">
        <div className="container mx-auto md:px-5 md:py-6 px-0 py-4">
          <ServiceCardList />
        </div>
      </section>
      <section className="container mx-auto px-5 pt-10 md:pt-20 pb-5 md:pb-10">
        <NewNftSlide />
      </section>
      <section className="container mx-auto px-5 pb-10 md:pb-20 pt-5 md:pt-10 flex flex-col lg:flex-row gap-10 lg:gap-6 justify-between">
        <div className="lg:max-w-[600px] max-w-full">
          <NftDropsCalendarSlide />
        </div>
        <div className="flex gap-4 lg:gap-6 justify-between">
          <div className="lg:w-[240px] w-1/2">
            <HotNftCard />
          </div>
          <div className="lg:w-[240px] w-1/2">
            <PromotionCard />
          </div>
        </div>
      </section>
      </>
  );
}
