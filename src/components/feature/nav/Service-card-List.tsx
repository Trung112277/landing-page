import { SERVICE_CARDS } from '../../../constant/service-cards';
import { ServiceCardItem } from './Service-card-item';

export function ServiceCardList() {
  return (
    <nav>
      <ul className="flex items-center justify-between gap-3">
        {SERVICE_CARDS.map((item, index) => (
          <li key={index}>
            <ServiceCardItem 
              icon={item.icon}
              alt={item.alt}
              label={item.label}
              to={item.to}
              new={item.new}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}