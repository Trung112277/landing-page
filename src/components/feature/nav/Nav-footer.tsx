import { H5 } from '@/components/common/heading/H5';
import { useNavigation } from '../../../context/NavigationContext';
import { NavList } from './Nav-list';
import { Button } from '@/components/ui/button';

export function NavFooter() {
  const { footerNav } = useNavigation();
  
  return (
    <div className="grid grid-cols-4 gap-8">
      {footerNav.map((section, idx) => (
        <div key={idx} className="flex flex-col">
          <H5 className="mb-3">{section.title}</H5>
          <nav>
            <ul className="flex flex-col gap-2">
              <NavList
                navItems={section.links}
                itemClassName=""
                containerClassName="flex flex-col gap-2"
              />
            </ul>
          </nav>
          {section.title === 'CONTACT US' && (
            <div className="mt-6">
              <Button
                variant="ghost"
                className="hover:bg-transparent p-0 w-fit focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
              >
                <img
                  src={`${import.meta.env.BASE_URL}/image/install-app.png`}
                  alt="install-app"
                />
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
