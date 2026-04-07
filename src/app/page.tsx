"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import MagneticButton from '@/components/MagneticButton';
import {
  createRevealAnimation,
  createGlassCardAnimation,
  createScrollIndicator,
  createMeshGradientAnimation
} from '@/lib/scroll';



export default function Home() {
  useEffect(() => {
    // Initialize scroll animations
    createRevealAnimation('.reveal-section');

    // Initialize enhanced glass card animations
    createGlassCardAnimation('.glass-card');
    createGlassCardAnimation('.glass-card-elevated');

    // Create scroll progress indicator
    createScrollIndicator();

    // Enhanced mesh gradient animations
    createMeshGradientAnimation('.mesh-gradient-bg');
  }, []);

  return (
    <main className="relative">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Hero Section */}
      <Hero />

      {/* About Section - Apple Style Executive Profile */}
      <section
        className="py-[var(--section-padding)] px-[var(--container-padding)]"
        id="about"
        aria-label="About Section"
        style={{ background: 'transparent', padding: 'clamp(5rem, 10vw, 10rem) 0' }}
      >
        <div className="max-w-[var(--max-w-content)] mx-auto" id="main-content">
          <div className="text-center mb-20">
            <motion.h2
              className="mb-8"
              style={{
                fontSize: 'var(--text-h1)',
                color: 'var(--color-text-primary)',
                fontWeight: 'var(--font-extrabold)',
                letterSpacing: 'var(--tracking-tight)',
                lineHeight: 'var(--leading-h1)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              Executive Profile
            </motion.h2>
            <motion.p
              className="max-w-[var(--max-w-prose)] mx-auto"
              style={{
                fontSize: 'var(--text-h3)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-body)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              viewport={{ once: true }}
            >
              {/* TODO: Replace with your own professional tagline */}
              Your professional tagline goes here. Describe what you do at the intersection of your key skills.
            </motion.p>
          </div>

          {/* Balanced Two-Column Grid */}
          <div
            className="grid lg:grid-cols-2 items-center"
            style={{ gap: '4rem' }}
          >
            {/* Left Column: Bio Text + CTA */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: 'var(--text-body)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--leading-body)'
                  }}
                >
                  {/* TODO: Replace with your first bio paragraph */}
                  Write your first bio paragraph here. Describe your career trajectory and what you've accomplished at a high level.
                </p>

                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: 'var(--text-body)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--leading-body)'
                  }}
                >
                  {/* TODO: Replace with your second bio paragraph */}
                  Write your second bio paragraph here. Go deeper into your experience, key companies, and what makes your background unique.
                </p>

                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: 'var(--text-body)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--leading-body)'
                  }}
                >
                  {/* TODO: Replace with your third bio paragraph */}
                  Write your third bio paragraph here. Describe what you're focused on today and the value you bring.
                </p>
              </div>

              <div className="pt-4">
                <motion.a
                  href="/career"
                  className="btn-primary"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 8px 24px rgba(88, 86, 214, 0.3)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Explore Career Journey</span>
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column: Photo + Name + Credentials */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* TODO: Replace /headshot.jpg in /public with your own photo */}
                <img
                  src="/headshot.jpg"
                  alt="Your Name - Your Title"
                  className="w-64 h-64 rounded-full mx-auto mb-6 object-cover"
                  style={{
                    border: '4px solid var(--color-border-default)',
                    boxShadow: 'var(--shadow-lg)'
                  }}
                />
              </div>
              <h3
                className="mb-3"
                style={{
                  fontSize: 'var(--text-h2)',
                  color: 'var(--color-text-primary)',
                  fontWeight: 'var(--font-bold)',
                  lineHeight: 'var(--leading-h2)'
                }}
              >
                {/* TODO: Replace with your name */}
                Your Name
              </h3>
              <p
                className="uppercase mb-4"
                style={{
                  fontSize: 'var(--text-small)',
                  color: 'var(--color-accent-blue)',
                  fontWeight: 'var(--font-medium)',
                  letterSpacing: 'var(--tracking-wide)',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {/* TODO: Replace with your title and company */}
                Your Title, Your Company
              </p>
              <div
                className="inline-flex items-center gap-2"
                style={{
                  fontSize: 'var(--text-small)',
                  color: 'var(--color-text-tertiary)'
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--color-accent-cyan)' }}
                ></span>
                {/* TODO: Replace with your certification or key credential */}
                Your Certification
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Contact Section - Apple Style Clean Design */}
      <section
        className="py-[var(--section-padding)] px-[var(--container-padding)]"
        id="contact"
        aria-label="Contact Information"
        style={{ background: 'transparent', padding: 'clamp(5rem, 10vw, 10rem) 0' }}
      >
        <div className="max-w-[var(--max-w-content)] mx-auto text-center">
          <motion.h2
            className="text-[var(--text-h1)] font-[var(--font-extrabold)] leading-[var(--leading-h1)] tracking-[var(--tracking-tight)] mb-8"
            style={{
              fontSize: 'var(--text-h1)',
              color: 'var(--color-text-primary)',
              fontWeight: 'var(--font-extrabold)',
              letterSpacing: 'var(--tracking-tight)'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            Let's Talk
          </motion.h2>


          <motion.div
            className="grid md:grid-cols-3 gap-[var(--space-6)] mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
              staggerChildren: 0.1
            }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://www.linkedin.com/in/your-linkedin-handle/"
              className="group block"
              style={{
                backgroundColor: 'var(--color-bg-elevated)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border-subtle)',
                padding: 'var(--space-6)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--duration-normal) var(--ease-standard)'
              }}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 24 }
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                  style={{
                    backgroundColor: 'var(--color-accent-blue)',
                    color: 'white'
                  }}
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3
                  className="font-semibold"
                  style={{
                    fontSize: 'var(--text-h4)',
                    color: 'var(--color-text-primary)',
                    fontWeight: 'var(--font-semibold)'
                  }}
                >
                  LinkedIn
                </h3>
                <p
                  className="text-center"
                  style={{
                    fontSize: 'var(--text-small)',
                    color: 'var(--color-text-tertiary)'
                  }}
                >
                  Connect professionally
                </p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:your@email.com"
              className="group block"
              style={{
                backgroundColor: 'var(--color-bg-elevated)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border-subtle)',
                padding: 'var(--space-6)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--duration-normal) var(--ease-standard)'
              }}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 24 }
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                  style={{
                    backgroundColor: 'var(--color-accent-violet)',
                    color: 'white'
                  }}
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3
                  className="font-semibold"
                  style={{
                    fontSize: 'var(--text-h4)',
                    color: 'var(--color-text-primary)',
                    fontWeight: 'var(--font-semibold)'
                  }}
                >
                  Email
                </h3>
                <p
                  className="text-center"
                  style={{
                    fontSize: 'var(--text-small)',
                    color: 'var(--color-text-tertiary)'
                  }}
                >
                  Direct line
                </p>
              </div>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download="Your_Name_Resume.pdf"
              className="group block"
              style={{
                backgroundColor: 'var(--color-bg-elevated)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border-subtle)',
                padding: 'var(--space-6)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all var(--duration-normal) var(--ease-standard)'
              }}
              whileHover={{
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 24 }
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                  style={{
                    backgroundColor: 'var(--color-accent-cyan)',
                    color: 'white'
                  }}
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3
                  className="font-semibold"
                  style={{
                    fontSize: 'var(--text-h4)',
                    color: 'var(--color-text-primary)',
                    fontWeight: 'var(--font-semibold)'
                  }}
                >
                  Resume
                </h3>
                <p
                  className="text-center"
                  style={{
                    fontSize: 'var(--text-small)',
                    color: 'var(--color-text-tertiary)'
                  }}
                >
                  Full executive profile
                </p>
              </div>
            </motion.a>
          </motion.div>

          <motion.p
            className="mt-8"
            style={{
              fontSize: 'var(--text-small)',
              color: 'var(--color-text-tertiary)',
              width: '100%',
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* TODO: Replace with your own focus areas */}
            Your focus area 1 • Your focus area 2 • Your focus area 3
          </motion.p>
        </div>
      </section>
    </main>
  );
}
