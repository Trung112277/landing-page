import { ServiceCardList } from '@/components/feature/nav/Service-card-List';

export function Home() {
  return (
    <>
      <section>hero section</section>
      <section className="container mx-auto px-5 mb-10">
        <ServiceCardList />
      </section>
      <section className="container mx-auto px-5 m-10">
        New NFT Collections
      </section>
      <section className="container mx-auto px-5  mb-20 mt-10">
        NFT Drops Calendar
      </section>
    </>
  );
}
