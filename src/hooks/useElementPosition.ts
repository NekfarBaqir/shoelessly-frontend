import { useEffect, useState } from 'react';

interface Position {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

export const useElementPosition = (
  elementRef: React.RefObject<HTMLElement | null>,
  referenceRef?: React.RefObject<HTMLElement | null>,
  calculatePosition: (element: DOMRect, reference?: DOMRect) => Position = (element) => ({
    top: element.top,
    left: element.left,
  })
) => {
  const [position, setPosition] = useState<Position>({});

  useEffect(() => {
    const updatePosition = () => {
      if (elementRef.current) {
        const elementRect = elementRef.current.getBoundingClientRect();
        const referenceRect = referenceRef?.current?.getBoundingClientRect();
        setPosition(calculatePosition(elementRect, referenceRect));
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [elementRef, referenceRef, calculatePosition]);

  return position;
}; 