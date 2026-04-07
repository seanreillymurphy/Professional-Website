"use client";

import { useEffect } from 'react';

export default function AccessibilityProvider() {
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return;

    // Handle reduced motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleReducedMotion = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.style.removeProperty('--animation-duration');
        document.documentElement.classList.remove('reduce-motion');
      }
    };

    // Set initial state
    if (prefersReducedMotion.matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.classList.add('reduce-motion');
    }

    prefersReducedMotion.addEventListener('change', handleReducedMotion);

    // Handle prefers-color-scheme for enhanced accessibility
    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: light)');

    const handleColorScheme = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('light-preference');
      } else {
        document.documentElement.classList.remove('light-preference');
      }
    };

    prefersColorScheme.addEventListener('change', handleColorScheme);

    // Focus management for better keyboard navigation
    const handleFocusVisible = () => {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('focus-visible');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('focus-visible');
      });
    };

    handleFocusVisible();

    // Cleanup
    return () => {
      prefersReducedMotion.removeEventListener('change', handleReducedMotion);
      prefersColorScheme.removeEventListener('change', handleColorScheme);
    };
  }, []);

  return null;
}