import { PromoCard } from './Promo-card';
import { PROMOTION_CARD } from '@/constant/promotion-card';

export function PromotionCard() {
  return (
    <PromoCard
      title="Promotion"
      image={PROMOTION_CARD[0].image}
      alt={PROMOTION_CARD[0].alt}
    />
  );
}
