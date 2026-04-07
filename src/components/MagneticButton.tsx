"use client";

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/scroll';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  intensity?: number;
  download?: string;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  intensity = 0.3,
  download
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseEnter = () => {
      // Enhanced hover glow effect
      gsap.to(button, {
        boxShadow: "0 0 30px rgba(99, 102, 241, 0.4), 0 8px 32px rgba(0, 0, 0, 0.4)",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = button.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left - rect.width / 2;
      const y = mouseEvent.clientY - rect.top - rect.height / 2;

      // Enhanced magnetic effect with rotation
      gsap.to(button, {
        x: x * intensity,
        y: y * intensity,
        rotationX: y * intensity * 0.5,
        rotationY: x * intensity * 0.5,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      // Reset all transformations
      gsap.to(button, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        boxShadow: "0 0 0 rgba(99, 102, 241, 0), 0 8px 32px rgba(0, 0, 0, 0.4)",
        duration: 0.6,
        ease: "elastic.out(1, 0.4)"
      });
    };

    const handleClick = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = button.getBoundingClientRect();

      // Create ripple effect
      const ripple = document.createElement('div');
      const size = Math.max(rect.width, rect.height) * 1.5;
      const x = mouseEvent.clientX - rect.left - size / 2;
      const y = mouseEvent.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
        transform: scale(0);
        pointer-events: none;
        z-index: 10;
      `;

      button.style.position = 'relative';
      button.style.overflow = 'hidden';
      button.appendChild(ripple);

      // Animate ripple
      gsap.to(ripple, {
        scale: 1,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
        }
      });

      // Enhanced scale effect on click
      gsap.to(button, {
        scale: 0.96,
        duration: 0.1,
        ease: "power3.out",
        onComplete: () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "elastic.out(1, 0.4)"
          });
        }
      });

      if (onClick) {
        onClick();
      }
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('click', handleClick);
    };
  }, [intensity, onClick]);

  const baseClasses = "magnetic-btn transform-gpu transition-shadow duration-200";
  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={combinedClasses}
        download={download}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={combinedClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
}