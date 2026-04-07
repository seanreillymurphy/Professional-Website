import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Linear-style futuristic color system
        bg: {
          primary: '#0a0a0a',          // Near-black base
          secondary: '#111111',         // Elevated surfaces
          tertiary: '#1a1a1a',         // Cards, modals
        },
        accent: {
          primary: '#6366f1',      // Indigo
          secondary: '#3b82f6',    // Blue
          tertiary: '#8b5cf6',     // Purple
          cyan: '#06b6d4',         // Cyan for highlights
        },
        text: {
          primary: '#ffffff',        // Pure white for headings
          secondary: '#a1a1aa',      // Muted for body text
          tertiary: '#71717a',       // Very muted for captions
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          visible: 'rgba(255, 255, 255, 0.15)',
          strong: 'rgba(255, 255, 255, 0.25)',
        },
        glass: {
          bg: 'rgba(255, 255, 255, 0.03)',
          elevated: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        // Legacy support
        navy: {
          DEFAULT: '#0a0a0a',
          light: '#111111',
          dark: '#000000',
        },
        platinum: {
          DEFAULT: '#a1a1aa',
          light: '#ffffff',
          dark: '#71717a',
        },
        emerald: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
        amber: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
        },
      },
      fontFamily: {
        display: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'SF Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
        'gradient-accent': 'linear-gradient(90deg, #6366f1, #3b82f6, #06b6d4)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-gradient': `
          radial-gradient(at 20% 30%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
          radial-gradient(at 80% 20%, rgba(59, 130, 246, 0.25) 0%, transparent 50%),
          radial-gradient(at 40% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)
        `,
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'mesh-float': 'mesh-float 20s ease-in-out infinite',
        'timeline-pulse': 'timelinePulse 2s infinite',
        'reveal-char': 'revealChar 0.6s forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'particle-float': 'particle-float 15s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'mesh-float': {
          '0%, 100%': {
            transform: 'translateX(0%) translateY(0%) rotate(0deg)',
          },
          '33%': {
            transform: 'translateX(30px) translateY(-30px) rotate(1deg)',
          },
          '66%': {
            transform: 'translateX(-20px) translateY(20px) rotate(-1deg)',
          },
        },
        timelinePulse: {
          '0%, 100%': {
            boxShadow: '0 0 0 4px var(--bg-primary), 0 0 20px rgba(16, 185, 129, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 0 6px var(--bg-primary), 0 0 30px rgba(16, 185, 129, 0.6)',
          },
        },
        revealChar: {
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          from: {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'particle-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      fontSize: {
        'hero': 'clamp(2.5rem, 8vw, 5rem)',
        'section': 'clamp(1.75rem, 4vw, 2.5rem)',
        'display': 'clamp(3rem, 10vw, 6rem)',
        'subtitle': 'clamp(1.25rem, 3vw, 1.5rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'glass-elevated': '0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        'glass-hover': '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        'neon': '0 0 20px rgba(99, 102, 241, 0.3)',
        'neon-lg': '0 0 40px rgba(99, 102, 241, 0.4)',
        'particle': '0 0 80px rgba(99, 102, 241, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config