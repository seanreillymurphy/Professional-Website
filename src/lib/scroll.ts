"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

let lenis: Lenis | null = null;

// Initialize Lenis smooth scroll
export const initSmoothScroll = () => {
  if (typeof window === 'undefined') return;

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  });

  // Integrate Lenis with GSAP
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenis;
};

// Cleanup function
export const destroySmoothScroll = () => {
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
};

// Scroll to element
export const scrollTo = (target: string | HTMLElement, options?: { offset?: number; duration?: number }) => {
  if (lenis) {
    lenis.scrollTo(target, {
      offset: options?.offset || 0,
      duration: options?.duration || 1,
    });
  }
};

// Animation helpers
export const createRevealAnimation = (selector: string, options: {
  y?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  end?: string;
} = {}) => {
  const {
    y = 60,
    opacity = 0,
    duration = 1,
    stagger = 0.2,
    start = "top 85%",
    end = "top 50%"
  } = options;

  return gsap.from(selector, {
    y,
    opacity,
    duration,
    ease: "power3.out",
    stagger,
    scrollTrigger: {
      trigger: selector,
      start,
      end,
      toggleActions: "play none none reverse"
    }
  });
};

export const createParallaxEffect = (selector: string, options: {
  y?: string;
  start?: string;
  end?: string;
} = {}) => {
  const {
    y = "30%",
    start = "top top",
    end = "bottom top"
  } = options;

  return gsap.to(selector, {
    y,
    ease: "none",
    scrollTrigger: {
      trigger: selector,
      start,
      end,
      scrub: true
    }
  });
};

export const createPinnedTimeline = (trigger: string, pin: boolean = true, scrub: number | boolean = 1) => {
  return gsap.timeline({
    scrollTrigger: {
      trigger,
      pin,
      scrub,
      start: "top top",
      end: "+=2000"
    }
  });
};

// Futuristic text reveal with stagger effect
export const createFuturisticTextReveal = (selector: string, options: {
  delay?: number;
  stagger?: number;
  duration?: number;
} = {}) => {
  const {
    delay = 0,
    stagger = 0.03,
    duration = 1.2
  } = options;

  const elements = gsap.utils.toArray(selector);

  elements.forEach((element: any) => {
    const chars = element.textContent.split('');
    element.innerHTML = chars.map((char: string, i: number) =>
      `<span class="reveal-char" style="display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');

    gsap.fromTo(element.querySelectorAll('.reveal-char'),
      {
        opacity: 0,
        y: 100,
        rotateX: -90,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration,
        ease: "power4.out",
        stagger,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
};

// Glass morphism card hover animation
export const createGlassCardAnimation = (selector: string) => {
  const cards = gsap.utils.toArray(selector);

  cards.forEach((card: any) => {
    const tl = gsap.timeline({ paused: true });

    tl.to(card, {
      y: -10,
      scale: 1.02,
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4), 0 0 80px rgba(99, 102, 241, 0.1)",
      duration: 0.3,
      ease: "power2.out"
    });

    card.addEventListener('mouseenter', () => tl.play());
    card.addEventListener('mouseleave', () => tl.reverse());
  });
};

// Particle system reveal animation
export const createParticleReveal = (selector: string) => {
  return gsap.fromTo(selector,
    {
      opacity: 0,
      scale: 0.8,
      filter: "blur(20px)"
    },
    {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: selector,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

// Magnetic scroll indicator
export const createScrollIndicator = () => {
  if (typeof window === 'undefined') return;

  const indicator = document.createElement('div');
  indicator.className = 'scroll-progress';
  indicator.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg, #6366f1, #3b82f6, #06b6d4);
    z-index: 9999;
    transition: width 0.1s ease;
  `;

  document.body.appendChild(indicator);

  if (lenis) {
    lenis.on('scroll', ({ progress }: { progress: number }) => {
      gsap.to(indicator, {
        width: `${progress * 100}%`,
        duration: 0.1,
        ease: "none"
      });
    });
  }

  return indicator;
};

// Enhanced mesh gradient animation
export const createMeshGradientAnimation = (selector: string) => {
  return gsap.to(selector, {
    backgroundPosition: "100% 50%",
    duration: 15,
    ease: "none",
    repeat: -1,
    yoyo: true
  });
};

export { gsap, ScrollTrigger };