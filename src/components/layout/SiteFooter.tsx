"use client";

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-[var(--container-padding)] border-t border-white/10 bg-black">
      <div className="max-w-[var(--max-w-content)] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          {/* Using !text-white to override any global gray styles */}
          <motion.p 
            className="!text-white font-extrabold text-2xl tracking-tight"
            style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}
          >
            Sean R. Murphy
          </motion.p>
          <p className="text-gray-400 text-xs mt-2 uppercase tracking-[0.25em] font-semibold opacity-80">
            Senior Director, Go-to-Market
          </p>
        </div>
        
        <div className="text-gray-500 text-xs font-mono tracking-tighter">
          © {currentYear} • ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}