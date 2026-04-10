"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Link from 'next/link';
import {
  createRevealAnimation,
  createGlassCardAnimation,
  createScrollIndicator,
  createMeshGradientAnimation
} from '@/lib/scroll';

const keyAchievements = [
  "Highest Performing Sales Professional in Thoughtworks Company History ($128M TCV, Avg Deal Size $18M)",
  "Built and Scaled Global GTM Functions at Thoughtworks, The Modern Data Company & Nearform",
  "Multiple Time President's Club Award Winner"
];

export default function Home() {
  useEffect(() => {
    createRevealAnimation('.reveal-section');
    createGlassCardAnimation('.glass-card');
    createGlassCardAnimation('.glass-card-elevated');
    createScrollIndicator();
    createMeshGradientAnimation('.mesh-gradient-bg');
  }, []);

  return (
    <main className="relative bg-black">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <Hero />

      {/* About Section - Executive Profile */}
      <section
        className="py-24 px-[var(--container-padding)]"
        id="about"
        aria-label="About Section"
      >
        <div className="max-w-[var(--max-w-content)] mx-auto" id="main-content">
          <motion.h2
            className="text-center mb-16 text-5xl md:text-6xl font-extrabold tracking-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Executive Profile
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Bio Text & Action */}
            <motion.div
              className="flex flex-col items-center text-center space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 max-w-xl">
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  I am a consultative sales leader with a track record of bringing transformative technology to market at world-class firms. My expertise lies in bridging the gap between deep technical capabilities and the strategic business outcomes sought by the C-Suite.
                </p>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  Throughout my career, I've specialized in scaling global commercial functions, building joint-selling programs with GCP and AWS, and generating record-breaking TCV through high-stakes enterprise sales frameworks.
                </p>
              </div>

              {/* Action Buttons - Unified Styling */}
              <div className="flex flex-col space-y-6 pt-6 w-full items-center">
                <motion.a
                  href="/career"
                  className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold transition-all shadow-xl !text-white !bg-blue-600" 
                  style={{ minWidth: '280px' }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 10px 30px -10px rgba(37, 99, 235, 0.6)',
                    backgroundColor: '#2563eb' 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Career Journey
                </motion.a>

                <motion.a
                  href="/thought-leadership"
                  className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold transition-all shadow-xl !text-white !bg-blue-600"
                  style={{ minWidth: '280px' }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 10px 30px -10px rgba(37, 99, 235, 0.6)',
                    backgroundColor: '#2563eb'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Thought Leadership
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column: Photo & Details */}
            <motion.div
              className="flex flex-col items-center text-center space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="/headshot.jpg"
                  alt="Sean R. Murphy"
                  className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-gray-800 shadow-2xl"
                />
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-white">Sean R. Murphy</h3>
                <p className="text-blue-400 font-mono tracking-widest uppercase text-sm mt-1">
                  Go-to-Market Leader
                </p>
              </div>
              
              <div className="w-full max-w-md space-y-2">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center mb-3">
                  Key Career Highlights
                </p>
                {keyAchievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 text-left hover:bg-white/10 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <p className="text-sm text-gray-300 leading-snug">{achievement}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-[var(--container-padding)]" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Talk
          </motion.h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <motion.a 
              href="https://www.linkedin.com/in/seanreillymurphy/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              whileHover={{ y: -8 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#0077b5]/10 text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">LinkedIn</h3>
                <p className="text-sm text-gray-400">Connect with Sean</p>
              </div>
            </motion.a>

            <motion.a 
              href="mailto:seanreillymurphy@gmail.com" 
              className="flex-1 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              whileHover={{ y: -8 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                <p className="text-sm text-gray-400">Direct Message</p>
              </div>
            </motion.a>
          </div>

          <motion.p className="mt-16 text-sm text-gray-500 uppercase tracking-[0.2em]">
            Enterprise AI • GTM Strategy • Digital Transformation
          </motion.p>
        </div>
      </section>
    </main>
  );
}