"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import ProfessionalParticleBackground from './ProfessionalParticleBackground';
import { gsap } from '@/lib/scroll';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (titleRef.current) {
      const letters = titleRef.current.querySelectorAll('.hero-letter');

      gsap.fromTo(letters,
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
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.03,
          delay: 0.5
        }
      );
    }

    if (heroRef.current) {
      gsap.to(heroRef.current, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });
    }
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="hero-letter inline-block" style={{transitionDelay: `${index * 30}ms`}}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center mesh-gradient-bg"
      id="hero"
      style={{ background: 'transparent' }}
    >
      <ProfessionalParticleBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase mb-8 opacity-80"
          style={{
            color: 'var(--color-accent-blue)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-small)',
            letterSpacing: 'var(--tracking-wide)',
            fontWeight: 'var(--font-medium)',
            width: '100%',
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Technology Sales Executive | AI & Enterprise GTM
        </motion.p>

        <h1
          ref={titleRef}
          className="mb-8"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 'var(--font-extrabold)',
            color: 'var(--color-text-primary)',
            lineHeight: '1.1',
            letterSpacing: 'var(--tracking-tight)'
          }}
        >
          {splitText("Sean R. Murphy")}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{
            fontSize: 'var(--text-h3)',
            color: 'var(--color-text-secondary)',
            lineHeight: 'var(--leading-body)'
          }}
        >
          Translating complex Data, AI and Digital Transformation capabilities into narratives that drive executive buy-in and accelerate enterprise adoption.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={() => {
              const target = document.getElementById('contact');
              if (target) {
                if (lenis) {
                  lenis.scrollTo(target, { duration: 1.5 });
                } else {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
            className="btn-primary"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 8px 24px rgba(88, 86, 214, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Let's Talk</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}