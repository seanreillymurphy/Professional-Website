# CLAUDE.md - Project Configuration

## Project Overview
- Framework: Next.js 16+ (App Router), TypeScript strict mode
- Styling: Tailwind CSS v3 + CSS custom properties for design tokens
- Animation: Framer Motion + GSAP ScrollTrigger + Lenis smooth scroll
- Particle system: Custom Canvas 2D with simplex-noise
- Package manager: npm

## Build & Test Commands
- npm run dev - start dev server
- npm run build - production build (MUST pass with zero errors after every change)
- npm run lint - ESLint
- npm run export - static export for GitHub Pages

## Code Conventions
- ALL colors via CSS custom properties from src/styles/tokens.css - never hardcode hex values in components
- ALL spacing via token values - never hardcode px in components
- ALL animations use shared variants from src/lib/animations.ts
- ALL easing curves use token CSS variables or shared presets
- Components are functional React with TypeScript interfaces
- Semantic HTML elements required (section, nav, main, article - not div soup)
- Only animate transform, opacity, and filter for 60fps safety
- Every interactive element MUST have hover + active/tap feedback
- Every section MUST have scroll-triggered entrance animation

## Design Philosophy
- Apple.com-level whitespace: when in doubt, add MORE space, not less
- Maximum restraint: 1-2 accent colors, rest is grayscale
- Typography does the heavy lifting - size, weight, and color create hierarchy, not decoration
- Every animation serves a purpose - no animation for animation's sake
- The site should feel like scrolling through distinct "pages" on a single continuous scroll
- Particle background should feel like ocean currents with color shimmer - mesmerizing, not distracting

## File Structure
src/
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout with Lenis + font loading
│   └── page.tsx      # Single page with all sections
├── components/
│   ├── ui/           # Primitives: Button, Card, Badge, Link
│   ├── sections/     # Hero, About, Work, Contact, etc.
│   ├── layout/       # Header, Footer, PageWrapper
│   └── motion/       # ScrollReveal, FadeIn, ParallaxLayer wrappers
├── lib/
│   ├── animations.ts # Shared Framer Motion variants + transitions
│   ├── gsapConfig.ts # GSAP plugin registration (client-only)
│   └── utils.ts      # cn() helper, etc.
├── styles/
│   ├── tokens.css    # ALL design tokens as CSS custom properties
│   └── globals.css   # Reset, base styles, importing tokens
└── types/            # TypeScript types
