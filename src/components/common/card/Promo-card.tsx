import { H2 } from '../heading/H2';

interface PromoCardProps {
  title: string;
  image: string;
  alt: string;
}

export function PromoCard({ title, image, alt }: PromoCardProps) {
  return (
    <div>
      <H2>{title}</H2>
      <img
        src={`${import.meta.env.BASE_URL}${image}`}
        alt={alt}
        className="rounded-xl block w-full h-[240px] object-cover"
      />
    </div>
  );
}
