import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingKey, setLoadingKey] = useState(0);
  const location = useLocation();
  const visitedPages = useRef<Set<string>>(new Set());
  const loadingStartTime = useRef<number>(0);

  useEffect(() => {
    const currentPath = location.pathname;
    
    const isFirstVisit = !visitedPages.current.has(currentPath);
    
    if (isFirstVisit) {
      visitedPages.current.add(currentPath);
      loadingStartTime.current = Date.now();
      setLoadingKey(prev => prev + 1);
      setIsLoading(true);

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); 

      return () => clearTimeout(timer);
    } else {
      setLoadingKey(prev => prev + 1);
      setIsLoading(true);

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return { isLoading, setIsLoading, loadingKey };
}; 