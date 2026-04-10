"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const careerHistory = [
  {
    company: "The Modern Data Company",
    role: "Senior Director, Go-to-Market",
    location: "Chicago, IL",
    period: "Jan 2026 – Present",
    bullets: [
      "Stood up the global commercial function from the ground up, defining infrastructure and sales playbooks.",
      "Developed the core sales narrative, translating AI and data capabilities for executive buyers.",
      "Leads commercial approach for Private Equity and CPG/Retail sectors."
    ]
  },
  {
    company: "Nearform",
    role: "Senior Director, Strategic Growth",
    location: "Chicago, IL",
    period: "May 2025 – Jan 2026",
    bullets: [
      "Served as the first global revenue leader, establishing a consistent sales approach worldwide.",
      "Led partnership ecosystem strategy, including commercial modeling and joint selling motions.",
      "Owned the 'Fellows' program, a curated network of former C-suite operators for high-value access."
    ]
  },
  {
    company: "Valtech / Kin + Carta",
    role: "Vice President, Strategic Pursuits",
    location: "Chicago, IL",
    period: "Aug 2023 – May 2025",
    bullets: [
      "Achieved 120% of new business quota in 2024.",
      "Built joint selling programs with GCP and AWS to deepen relationships with hyperscalers.",
      "Author of 'Flipping the Script,' a whitepaper on Digital Decoupling and Legacy Modernization."
    ]
  },
  {
    company: "Thoughtworks",
    role: "Principal Consultant, Business Development",
    location: "Chicago, IL",
    period: "Jan 2020 – Aug 2023",
    bullets: [
      "Highest-performing sales professional in company history with over $120M in net new TCV.",
      "Scaled the outbound sales process now in use across three continents.",
      "Drove analyst briefings contributing to a Leader placement in the 2022 Forrester Wave."
    ]
  },
  {
    company: "Devbridge (acquired by Cognizant)",
    role: "Client Principal",
    location: "Chicago, IL",
    period: "Feb 2018 – Jan 2020",
    bullets: [
      "Engaged Fortune 500 executives to build business cases for custom software and agile delivery.",
      "Achieved 146% of cumulative goal in 2019.",
      "Founded the firm's process for identifying and landing new client engagements."
    ]
  },
  {
    company: "Outcome Health",
    role: "Account Executive",
    location: "Chicago, IL",
    period: "May 2016 – Sep 2017",
    bullets: [
      "Ranked in the top 10% of a sales team of over 80 contributors.",
      "Partnered with PE-backed dermatology groups to deploy patient engagement solutions.",
      "Served on the Competitive Intelligence Committee to refine company-wide sales positioning."
    ]
  },
  {
    company: "UrbanBound",
    role: "Enterprise Account Executive",
    location: "Chicago, IL",
    period: "Aug 2015 – Mar 2016",
    bullets: [
      "Closed the largest deal in company history with a Fortune 50 account.",
      "Identified and opened conversations with key decision makers in Fortune 500 organizations.",
      "Advised C-suite on relocation tax guidelines to support cost-cutting initiatives."
    ]
  },
  {
    company: "Groupon Getaways",
    role: "Senior Account Executive",
    location: "Chicago, IL",
    period: "May 2013 – Jul 2015",
    bullets: [
      "Grew an established book of business by over 500% in year one.",
      "Averaged over $5M per year in bookings; member of the Groupon Getaways Millionaire's Club.",
      "Signed the longest-term agreement in the history of Groupon Getaways."
    ]
  },
  {
    company: "Total Quality Logistics",
    role: "Logistics Account Executive",
    location: "Chicago, IL",
    period: "Nov 2012 – May 2013",
    bullets: [
      "Mastered the practice of inside sales and negotiation by booking carriers and speaking with hundreds of companies daily.",
      "Led the entire company in highest average profit margin after eight weeks in the role."
    ]
  },
  {
    company: "The Ritz-Carlton Chicago (A Four Seasons Hotel)",
    role: "Hotel Assistant Manager",
    location: "Chicago, IL",
    period: "Oct 2009 – Nov 2012",
    bullets: [
      "Graduate of the prestigious Four Seasons STEPS training program and the Four Seasons MIT program.",
      "Created and implemented the 'Candyman' program, resulting in features in USA Today, New York Times, and Daily Globe and Mail.",
      "Nominated by the Illinois Hotel and Lodging Administration for Customer Service Employee of the Year in 2011."
    ]
  }
];

// --- UPDATED PAST CLIENTS DATA (Ritchie Bros removed) ---
const pastClients = [
  { name: "Becton Dickinson", src: "/Logos/BDX_BIG.svg" },
  { name: "CVS", src: "/Logos/CVS_Health-Logo.wine.svg" },
  { name: "John Deere", src: "/Logos/john-deere-6-logo-svgrepo-com.svg" },
  { name: "KKR", src: "/Logos/KKR.svg" },
  { name: "Procter & Gamble", src: "/Logos/procter-gamble-1.svg" },
  { name: "The Home Depot", src: "/Logos/the-home-depot-2.svg" },
];

export default function CareerPage() {
  return (
    <main className="min-h-screen py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation Back */}
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-400 hover:text-white transition-colors mb-12 group"
        >
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
          <span className="font-mono tracking-widest uppercase text-sm">Back to Executive Profile</span>
        </Link>

        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-white">
            Career Journey
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            AI-enabled sales executive with a proven track record of partnering with the C-suite to drive enterprise transformation for Fortune 500 firms.
          </p>
        </motion.div>

        {/* TIMELINE SECTION */}
        <div className="space-y-12 mb-24">
          {careerHistory.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-gray-800"
            >
              <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              
              <div className="mb-1 flex flex-wrap items-baseline gap-x-4">
                <h2 className="text-2xl font-bold">{job.company}</h2>
                <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">
                  {job.period}
                </span>
              </div>
              <h3 className="text-lg text-blue-400 mb-4">{job.role}</h3>
              <ul className="space-y-3">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-gray-400 leading-relaxed flex items-start">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-700 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* PAST CLIENTS SECTION */}
        <motion.section 
          className="mb-24 p-10 rounded-3xl bg-white/5 border border-white/10 shadow-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-400 font-mono text-xs uppercase tracking-[0.3em] mb-12 text-center">Past Clients</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16 items-center justify-items-center">
            {pastClients.map((client) => (
              <div key={client.name} className="relative group flex items-center justify-center w-full h-16 px-4">
                <img 
                  src={client.src} 
                  alt={`${client.name} logo`}
                  className="max-h-full max-w-full object-contain filter grayscale invert opacity-60 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </motion.section>
        
        {/* EDUCATION SECTION */}
        <motion.div 
          className="mt-24 p-12 rounded-3xl bg-white/5 border border-white/10 text-center shadow-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">Education</p>
          <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Indiana University</h3>
          <p className="text-xl text-gray-400">Bachelor of Science</p>
          <p className="text-lg text-gray-500 mt-1">Hospitality</p>
        </motion.div>
      </div>
    </main>
  );
}