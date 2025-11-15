/**
 * useMenu Custom Hook
 * Manages mobile menu open/close state
 */

import { useState } from 'react';

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return {
    isMenuOpen,
    openMenu,
    closeMenu,
    toggleMenu,
  };
};
