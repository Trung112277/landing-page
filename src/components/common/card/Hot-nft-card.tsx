import { HOT_NFT_CARD } from '@/constant/hot-nft-card';
import { PromoCard } from './Promo-card';

export function HotNftCard() {
  return (
    <PromoCard
      title={HOT_NFT_CARD[0].title}
      image={HOT_NFT_CARD[0].image}
      alt={HOT_NFT_CARD[0].alt}
    />
  );
}
