"use client";

import { useEffect, useRef } from 'react';

export default function AnimatedParticleBackground() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Exactly match the original Main JS Features script implementation
    const particlesDiv = particlesRef.current;
    if (particlesDiv) {
      // Create animated gradient effect
      let position = 0;
      const interval = setInterval(() => {
        position += 1;
        particlesDiv.style.backgroundPosition = `${position}px ${position}px, ${40 + position}px ${60 + position}px, ${130 + position}px ${270 + position}px`;
      }, 50);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div
      ref={particlesRef}
      className="background-particles fixed inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(226, 232, 240, 0.05) 0%, transparent 50%)
        `,
        backgroundSize: '400px 400px, 600px 600px, 800px 800px',
        zIndex: 0
      }}
    />
  );
}