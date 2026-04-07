# Professional Portfolio Website Template

A modern, animated professional portfolio website built with Next.js, Tailwind CSS, Framer Motion, and GSAP.

## Features

- Animated hero section with letter-by-letter text reveal
- Interactive career timeline with expandable entries
- Contact form with Resend email integration
- Particle background animation
- Smooth scrolling with Lenis
- Fully responsive design
- Apple.com-inspired design language

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS custom properties
- **Animation:** Framer Motion + GSAP + Lenis
- **Email:** Resend API
- **Deployment:** Vercel

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create your environment file:
   ```bash
   cp .env.example .env.local
   ```
   Then add your Resend API key to `.env.local`.

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000

## Customization

Search for `TODO:` comments throughout the codebase to find all the places you need to update with your own content:

- `src/app/layout.tsx` - Site title, description, metadata, and schema markup
- `src/app/page.tsx` - Homepage content (hero, bio, contact links)
- `src/app/career/page.tsx` - Career timeline entries
- `src/app/contact/page.tsx` - Contact page links
- `src/app/api/contact/route.ts` - Email recipients for contact form
- `src/components/Hero.tsx` - Hero tagline and headline
- `src/components/layout/SiteFooter.tsx` - Footer copyright name
- `public/manifest.json` - PWA metadata
- `public/robots.txt` - Sitemap URL
- `public/sitemap.xml` - Domain URL
- `public/CNAME` - Custom domain (or delete if using Vercel URL)

### Assets to Replace

- `public/headshot.jpg` - Your professional photo
- `public/resume.pdf` - Your resume PDF
- `public/favicon.svg` - Your favicon

## Deployment

Push to GitHub, then import the repo in Vercel. Set `RESEND_API_KEY` as an environment variable in Vercel's project settings.

## Setup Guide

See **Website-Setup-Guide.md** for a complete, step-by-step walkthrough covering account creation, software installation, customization, and deployment.
