import { useState, useEffect } from 'react';

interface ResponsiveVisibleProps {
  visible: number;
  visiblemb?: number; // Mobile (default)
  visiblemd?: number; // Medium (768px+)
  visiblelg?: number; // Large (1024px+)
  visiblexl?: number; // Extra large (1280px+)
}

export function useResponsiveVisible({
  visible,
  visiblemb,
  visiblemd,
  visiblelg,
  visiblexl,
}: ResponsiveVisibleProps) {
  const [currentVisible, setCurrentVisible] = useState(visible);

  useEffect(() => {
    const updateVisible = () => {
      const width = window.innerWidth;
      
      if (width >= 1280 && visiblexl !== undefined) {
        setCurrentVisible(visiblexl);
      } else if (width >= 1024 && visiblelg !== undefined) {
        setCurrentVisible(visiblelg);
      } else if (width >= 768 && visiblemd !== undefined) {
        setCurrentVisible(visiblemd);
      } else if (visiblemb !== undefined) {
        setCurrentVisible(visiblemb);
      } else {
        setCurrentVisible(visible);
      }
    };

    updateVisible();
    window.addEventListener('resize', updateVisible);
    
    return () => window.removeEventListener('resize', updateVisible);
  }, [visible, visiblemb, visiblemd, visiblelg, visiblexl]);

  return currentVisible;
} 