import { NftSlide } from './Nft-slide';
import { NEW_NFT_COLLECTIONS } from '../../../constant/new-nft-collections';

export function NewNftSlide() {
  const nftData = NEW_NFT_COLLECTIONS;

  return (
    <NftSlide
      data={nftData}
      title="New NFT Collections"
      visible={6}
      visiblemb={3}
      visiblelg={4}
      visiblexl={6}
      imageClassName="md:h-[245px] object-cover h-[140px]"
    />
  );
}
