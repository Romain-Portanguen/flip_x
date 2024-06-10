import { useState, useEffect } from 'react';

export const useViewport = (minWidth: number, minHeight: number) => {
  const [isSupportedViewport, setIsSupportedViewport] = useState(true);

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (width < minWidth || height < minHeight) {
        setIsSupportedViewport(false);
      } else {
        setIsSupportedViewport(true);
      }
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, [minWidth, minHeight]);

  return isSupportedViewport;
};
