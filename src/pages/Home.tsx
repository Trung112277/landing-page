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
        <div className="container mx-auto px-5 py-6">
          <ServiceCardList />
        </div>
      </section>
      <section className="container mx-auto px-5 pt-20 pb-10">
        <NewNftSlide />
      </section>
      <section className="container mx-auto px-5 pb-20 pt-10 flex gap-6 justify-between">
        <div className="max-w-[600px]">
          <NftDropsCalendarSlide />
        </div>
        <div className="flex gap-6 justify-between">
          <div className="w-[240px]">
            <HotNftCard />
          </div>
          <div className="w-[240px]">
            <PromotionCard />
          </div>
        </div>
      </section>
    </>
  );
}
