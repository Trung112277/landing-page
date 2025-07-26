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
      <div className="bg-primary-foreground">
        <section className="container mx-auto px-5 mb-10 py-6">
          <ServiceCardList />
        </section>
      </div>
      <section className="container mx-auto px-5 m-10">
        <NewNftSlide />
      </section>
      <section className="container mx-auto px-5 mb-20 mt-10 flex gap-6">
        <div className="max-w-[600px]">
          <NftDropsCalendarSlide />
        </div>
      </section>
    </>
  );
}
