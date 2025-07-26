import { NFT_DROPS_CALENDAR } from '@/constant/nft-drops-calendar';
import { NftSlide } from './Nft-slide';

export function NftDropsCalendarSlide() {
  const nftData = NFT_DROPS_CALENDAR;

  return (
    <NftSlide
      data={nftData}
      title="NFT Drops Calendar"
      visible={1}
      imageClassName="h-[240px] object-fill"
    />
  );
}
