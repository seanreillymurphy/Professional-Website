"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ThoughtLeadership() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Navigation Back */}
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-400 hover:text-white transition-colors mb-12 group"
        >
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
          <span className="font-mono tracking-widest uppercase text-sm">Back to Executive Profile</span>
        </Link>

        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-16 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Thought Leadership
        </motion.h1>

        <div className="space-y-12">
          
          {/* Section 1: Digital Decoupling (Valtech + Your Video) */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 text-white">Digital Decoupling: Flipping the Script</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-video bg-black rounded-xl shadow-inner overflow-hidden border border-white/10">
                <video controls className="w-full h-full object-contain">
                  <source src="/1720547813300.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  Modernizing legacy systems doesn't have to be a "rip and replace" nightmare. 
                  In collaboration with Valtech, this whitepaper explores how digital decoupling 
                  allows organizations to innovate on the front-end while stabilizing the back-end.
                </p>
                <a 
                  href="https://www.valtech.com/whitepapers/digital-decoupling/" 
                  target="_blank" 
                  className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-500 transition-all shadow-lg"
                >
                  Read the Full Whitepaper →
                </a>
              </div>
            </div>
          </section>

          {/* Section 2: Tech and Ethics Webinar */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-white">Tech & Ethics: Navigating the New Frontier</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-3xl">
              A deep dive session with Thoughtworks experts on the ethical implications 
              of emerging tech and how executives can build responsible innovation frameworks.
            </p>
            <a 
              href="https://www.thoughtworks.com/en-us/about-us/events/webinars/tech-and-ethics-webinar" 
              target="_blank" 
              className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-500 transition-all shadow-lg"
            >
              Watch the Webinar
            </a>
          </section>

          {/* Section 3: Digital Transformation Blog */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-white">Boosting OEM Resilience through Digital Transformation</h2>
            <div className="border-l-4 border-blue-500 pl-6 mb-8">
              <p className="italic text-xl text-gray-300">
                "Three digital transformation opportunities helping OEMs boost resilience..."
              </p>
            </div>
            <a 
              href="https://www.thoughtworks.com/en-us/insights/articles/three-digital-transformation-opportunities-helping-oems-boost-re" 
              target="_blank" 
              className="text-blue-400 font-bold text-lg hover:text-white hover:underline transition-all"
            >
              Read Article on Thoughtworks →
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}