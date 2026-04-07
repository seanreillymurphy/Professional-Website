"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  createRevealAnimation,
  createGlassCardAnimation
} from '@/lib/scroll';

interface CareerExperience {
  id: string;
  company: string;
  period: string;
  location: string;
  positions: string[];
  description: string;
  achievements: string[];
  impact: string;
  keyStats?: {
    metric: string;
    value: string;
  }[];
}

// TODO: Replace ALL entries below with your own career history
const careerData: CareerExperience[] = [
  {
    id: 'current-role',
    company: 'Your Current Company',
    period: 'Start Date – Present',
    location: 'City, State',
    positions: ['Your Current Title'],
    description: 'Brief description of the company and your role. Include company size, industry, and what makes this role notable.',
    achievements: [
      'Key achievement #1 with specific metrics',
      'Key achievement #2 with specific metrics',
      'Key achievement #3 with specific metrics'
    ],
    impact: 'Describe the broader impact of your work here. What did you change or improve at a strategic level?',
    keyStats: [
      { metric: 'Metric Label', value: 'Value' },
      { metric: 'Metric Label', value: 'Value' },
      { metric: 'Metric Label', value: 'Value' }
    ]
  },
  {
    id: 'previous-role',
    company: 'Your Previous Company',
    period: 'Start Date – End Date',
    location: 'City, State',
    positions: ['Your Title'],
    description: 'Brief description of the company and your role.',
    achievements: [
      'Key achievement #1 with specific metrics',
      'Key achievement #2 with specific metrics',
      'Key achievement #3 with specific metrics'
    ],
    impact: 'Describe the broader impact of your work here.',
    keyStats: [
      { metric: 'Metric Label', value: 'Value' },
      { metric: 'Metric Label', value: 'Value' },
      { metric: 'Metric Label', value: 'Value' }
    ]
  }
  // Add more career entries as needed by copying the structure above
];

export default function CareerPage() {
  const [activeExperience, setActiveExperience] = useState<string | null>(null);

  useEffect(() => {
    // Initialize scroll animations
    createRevealAnimation('.reveal-section');
    createGlassCardAnimation('.glass-card');
  }, []);

  const toggleExperience = (id: string) => {
    setActiveExperience(activeExperience === id ? null : id);
  };

  return (
    <main className="relative">

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1
              className="mb-6"
              style={{
                fontSize: 'clamp(3rem, 8vw, 4rem)',
                fontWeight: 'var(--font-extrabold)',
                color: 'var(--color-text-primary)',
                lineHeight: '0.9',
                letterSpacing: 'var(--tracking-tight)'
              }}
            >
              Career <span style={{ color: 'var(--color-accent-blue)' }}>Journey</span>
            </h1>
            <p
              className="max-w-2xl mx-auto leading-relaxed"
              style={{
                fontSize: 'var(--text-h3)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-body)'
              }}
            >
              {/* TODO: Replace with your own career summary */}
              A brief summary of your career arc and what makes your professional journey compelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line" />

            {careerData.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 timeline-dot rounded-full z-10 ${activeExperience === experience.id ? 'timeline-dot-active' : ''}`} />

                {/* Content Card */}
                <div className="ml-20">
                  <button
                    onClick={() => toggleExperience(experience.id)}
                    className="w-full text-left transition-all duration-300 group"
                    style={{
                      backgroundColor: 'var(--color-bg-elevated)',
                      borderRadius: 'var(--radius-xl)',
                      border: '1px solid var(--color-border-subtle)',
                      padding: 'var(--space-6)',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3
                          className="mb-2 group-hover:transition-colors"
                          style={{
                            fontSize: 'var(--text-h2)',
                            fontWeight: 'var(--font-semibold)',
                            color: 'var(--color-text-primary)'
                          }}
                        >
                          {experience.company}
                        </h3>
                        <div className="flex flex-wrap gap-4 mb-2" style={{ fontSize: 'var(--text-small)', color: 'var(--color-text-tertiary)' }}>
                          <span>{experience.period}</span>
                          <span>•</span>
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {experience.positions.map((position, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-full"
                              style={{
                                backgroundColor: 'rgba(0, 122, 255, 0.2)',
                                color: 'var(--color-accent-blue)',
                                fontSize: 'var(--text-small)',
                                fontWeight: 'var(--font-medium)'
                              }}
                            >
                              {position}
                            </span>
                          ))}
                        </div>
                        <p
                          className="leading-relaxed"
                          style={{
                            color: 'var(--color-text-secondary)',
                            fontSize: 'var(--text-body)',
                            lineHeight: 'var(--leading-body)',
                            textAlign: 'left'
                          }}
                        >
                          {experience.description}
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <motion.div
                          animate={{ rotate: activeExperience === experience.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-8 h-8 flex items-center justify-center"
                          style={{ color: 'var(--color-accent-blue)' }}
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeExperience === experience.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div
                          className="mt-4 border-l-4"
                          style={{
                            backgroundColor: 'var(--color-bg-elevated)',
                            borderRadius: 'var(--radius-xl)',
                            border: '1px solid var(--color-border-subtle)',
                            borderLeftColor: 'var(--color-accent-blue)',
                            borderLeftWidth: '4px',
                            padding: 'var(--space-6)',
                            boxShadow: 'var(--shadow-sm)'
                          }}
                        >
                          {/* Key Stats */}
                          {experience.keyStats && (
                            <div className="grid md:grid-cols-3 gap-4 mb-6">
                              {experience.keyStats.map((stat, idx) => (
                                <div
                                  key={idx}
                                  className="text-center p-4 rounded-lg"
                                  style={{ backgroundColor: 'rgba(0, 122, 255, 0.1)' }}
                                >
                                  <div
                                    className="mb-1"
                                    style={{
                                      fontSize: 'var(--text-h2)',
                                      fontWeight: 'var(--font-bold)',
                                      color: 'var(--color-accent-blue)'
                                    }}
                                  >
                                    {stat.value}
                                  </div>
                                  <div style={{ fontSize: 'var(--text-small)', color: 'var(--color-text-secondary)' }}>
                                    {stat.metric}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Achievements */}
                          <div className="mb-6">
                            <h4
                              className="mb-3"
                              style={{
                                fontSize: 'var(--text-h4)',
                                fontWeight: 'var(--font-semibold)',
                                color: 'var(--color-text-primary)'
                              }}
                            >
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {experience.achievements.map((achievement, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3"
                                  style={{ color: 'var(--color-text-secondary)' }}
                                >
                                  <div
                                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                    style={{ backgroundColor: 'var(--color-accent-blue)' }}
                                  />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Impact */}
                          <div>
                            <h4
                              className="mb-3"
                              style={{
                                fontSize: 'var(--text-h4)',
                                fontWeight: 'var(--font-semibold)',
                                color: 'var(--color-text-primary)'
                              }}
                            >
                              Impact
                            </h4>
                            <p
                              className="leading-relaxed"
                              style={{
                                color: 'var(--color-text-secondary)',
                                fontSize: 'var(--text-body)',
                                lineHeight: 'var(--leading-body)'
                              }}
                            >
                              {experience.impact}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            style={{
              backgroundColor: 'var(--color-bg-elevated)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border-subtle)',
              padding: 'var(--space-8)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <h3
              className="mb-4"
              style={{
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-semibold)',
                color: 'var(--color-text-primary)'
              }}
            >
              Let's Connect
            </h3>
            <p
              className="mb-6 leading-relaxed"
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--leading-body)'
              }}
            >
              {/* TODO: Replace with your own call-to-action text */}
              Interested in working together? Let's explore how we can create impact together.
            </p>
            <div className="flex justify-center">
              <a href="/contact" className="btn-primary">
                <span>Let's Connect</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
