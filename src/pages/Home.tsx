import { ServiceCardList } from '@/components/feature/nav/Service-card-List';
import { HeroSlide } from '@/components/feature/slide/Hero-slide';

export function Home() {
  return (
    <>
      <section>
        <HeroSlide />
      </section>
      <div className='bg-primary-foreground'>
      <section className="container mx-auto px-5 mb-10 py-6">
        <ServiceCardList />
      </section>
      </div>
    
      <section className="container mx-auto px-5 m-10">
        New NFT Collections
      </section>
      <section className="container mx-auto px-5  mb-20 mt-10">
        NFT Drops Calendar
      </section>
    </>
  );
}
