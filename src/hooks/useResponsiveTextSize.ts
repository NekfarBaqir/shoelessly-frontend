import { useEffect, useRef, useState } from 'react';

export const useResponsiveTextSize = (text: string) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [textSize, setTextSize] = useState('1.9rem');

  useEffect(() => {
    const adjustFontSize = () => {
      if (textRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const targetWidth = containerWidth * 0.9; // 90% of container width
        const textWidth = textRef.current.offsetWidth;
        const currentFontSize = parseFloat(window.getComputedStyle(textRef.current).fontSize);
        const newFontSize = (currentFontSize * targetWidth) / textWidth;
        setTextSize(`${newFontSize}px`);
      }
    };

    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);
    return () => window.removeEventListener('resize', adjustFontSize);
  }, [text]);

  return { textRef, containerRef, textSize };
}; 