import { Button } from '@/components/ui/button';

interface SidebarButtonProps {
  onToggle: (isOpen: boolean) => void;
  isOpen: boolean;
}

export function SidebarButton({ onToggle, isOpen }: SidebarButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => onToggle(!isOpen)}
    >
      {isOpen ? (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '24px', height: '24px' }}
        >
          <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '24px', height: '24px' }}
        >
          <rect y="4" width="24" height="3" rx="1.5" fill="currentColor"/>
          <rect y="10.5" width="24" height="3" rx="1.5" fill="currentColor"/>
          <rect y="17" width="16" height="3" rx="1.5" fill="currentColor"/>
        </svg>
      )}
    </Button>
  );
}