/**
 * useSlider Custom Hook
 * Manages carousel/slider functionality
 */

import { useState } from 'react';

export const useSlider = (itemsLength) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? itemsLength - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === itemsLength - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return {
    currentIndex,
    prevSlide,
    nextSlide,
    goToSlide,
  };
};
