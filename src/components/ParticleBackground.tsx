'use client'

import { useEffect, useRef, useCallback, memo } from 'react'
import { createNoise3D } from 'simplex-noise'

interface ParticleBackgroundProps {
  className?: string
  particleCount?: number
  colorRange?: [number, number] // hue range, e.g. [180, 300] for blue-purple
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  noiseOffset: number
  alpha: number
}

function ParticleBackground({
  className = '',
  particleCount,
  colorRange = [180, 300], // Default blue-purple range
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>()
  const noise3D = useRef(createNoise3D())
  const timeRef = useRef(0)
  const fpsRef = useRef(60)
  const frameCountRef = useRef(0)
  const lastTimeRef = useRef(0)
  const mouseRef = useRef({ x: 0, y: 0 })
  const scrollRef = useRef({ x: 0, y: 0 })

  // Responsive particle count based on screen width
  const getParticleCount = useCallback(() => {
    if (particleCount) return particleCount

    if (typeof window === 'undefined') return 800

    const width = window.innerWidth
    if (width >= 1024) return 3500  // desktop - increased from 2000
    if (width >= 640) return 1500   // tablet - increased from 800
    return 800                      // mobile - increased from 400
  }, [particleCount])

  // Initialize particles
  const initParticles = useCallback(() => {
    if (typeof window === 'undefined') return

    const count = getParticleCount()
    const particles: Particle[] = []

    // Get document height for full-page particle distribution
    const docHeight = Math.max(
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight,
      window.innerHeight
    )

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * docHeight, // Distribute across entire document height
        vx: 0,
        vy: 0,
        size: 0.5 + Math.random() * 1.5, // 0.5-2.0px radius
        noiseOffset: Math.random() * 1000,
        alpha: 0.3 + Math.random() * 0.4, // 0.3-0.7 alpha
      })
    }

    particlesRef.current = particles
  }, [getParticleCount])

  // Handle window resize with debouncing
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2) // Cap at 2x for performance
    const rect = canvas.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr

    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.scale(dpr, dpr)
    }

    canvas.style.width = rect.width + 'px'
    canvas.style.height = rect.height + 'px'

    // Re-initialize particles for new dimensions
    initParticles()
  }, [initParticles])

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const now = performance.now()
    const deltaTime = now - lastTimeRef.current
    lastTimeRef.current = now

    // FPS tracking (removed adaptive quality to prevent particle disappearing)
    frameCountRef.current++

    timeRef.current += 0.0001 // Time speed for noise - slowed down from 0.0004

    // Get current scroll position
    const scrollY = window.scrollY || window.pageYOffset
    const scrollX = window.scrollX || window.pageXOffset

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const particles = particlesRef.current
    const canvasWidth = canvas.width / (Math.min(window.devicePixelRatio || 1, 2))
    const canvasHeight = canvas.height / (Math.min(window.devicePixelRatio || 1, 2))

    // Update and draw particles
    particles.forEach((particle) => {
      // Flow field using dual noise octaves for organic movement
      const primaryNoise = noise3D.current(
        particle.x * 0.003,
        particle.y * 0.003,
        timeRef.current
      )
      const secondaryNoise = noise3D.current(
        particle.x * 0.0075 + 100,
        particle.y * 0.0075 + 100,
        timeRef.current
      )

      // Combine noise octaves
      const combinedNoise = primaryNoise * 0.7 + secondaryNoise * 0.3
      const angle = combinedNoise * Math.PI * 2

      // Apply flow force
      const force = 0.08  // Reduced from 0.15 for slower movement
      particle.vx += Math.cos(angle) * force
      particle.vy += Math.sin(angle) * force

      // Mouse repulsion effect (account for scroll offset)
      const mouseDocX = mouseRef.current.x + scrollX
      const mouseDocY = mouseRef.current.y + scrollY
      const mouseDistance = Math.sqrt(
        Math.pow(particle.x - mouseDocX, 2) +
        Math.pow(particle.y - mouseDocY, 2)
      )

      if (mouseDistance < 150) { // Repulsion radius
        const repelStrength = (150 - mouseDistance) / 150 * 0.5
        const angle = Math.atan2(
          particle.y - mouseDocY,
          particle.x - mouseDocX
        )
        particle.vx += Math.cos(angle) * repelStrength
        particle.vy += Math.sin(angle) * repelStrength
      }

      // Apply friction/damping
      particle.vx *= 0.97
      particle.vy *= 0.97

      // Cap velocity
      const maxVel = 2.0
      const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
      if (speed > maxVel) {
        particle.vx = (particle.vx / speed) * maxVel
        particle.vy = (particle.vy / speed) * maxVel
      }

      // Update position
      particle.x += particle.vx
      particle.y += particle.vy

      // Wrap at document edges with buffer
      const buffer = 10
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        window.innerHeight
      )

      if (particle.x < -buffer) particle.x = canvasWidth + buffer
      if (particle.x > canvasWidth + buffer) particle.x = -buffer
      if (particle.y < -buffer) particle.y = docHeight + buffer
      if (particle.y > docHeight + buffer) particle.y = -buffer

      // Color shimmer using separate noise for hue
      const hueNoise = noise3D.current(
        particle.x * 0.001 + particle.noiseOffset,
        particle.y * 0.001,
        timeRef.current * 0.0001  // Slowed down color shimmer from 0.0003
      )

      // Only draw particles that are visible in viewport (with buffer)
      const viewBuffer = 100
      const particleViewportY = particle.y - scrollY
      const particleViewportX = particle.x - scrollX

      if (
        particleViewportY > -viewBuffer &&
        particleViewportY < canvasHeight + viewBuffer &&
        particleViewportX > -viewBuffer &&
        particleViewportX < canvasWidth + viewBuffer
      ) {
        // Map noise to color range
        const [minHue, maxHue] = colorRange
        const hue = minHue + ((hueNoise + 1) / 2) * (maxHue - minHue)
        const saturation = 60 + Math.random() * 20  // 60-80%
        const lightness = 40 + Math.random() * 20   // 40-60%

        // Draw particle at viewport-relative position
        ctx.beginPath()
        ctx.arc(particleViewportX, particleViewportY, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${particle.alpha})`
        ctx.fill()
      }
    })

    animationFrameRef.current = requestAnimationFrame(animate)
  }, [colorRange])

  // Setup effect
  useEffect(() => {
    if (typeof window === 'undefined') return

    const canvas = canvasRef.current
    if (!canvas) return

    // Initial setup
    handleResize()
    initParticles()

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate)

    // Mouse tracking for particle interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout
    const debouncedResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(handleResize, 150)
    }

    window.addEventListener('resize', debouncedResize)
    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('resize', debouncedResize)
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(resizeTimeout)
    }
  }, [handleResize, initParticles, animate])

  return (
    <canvas
      ref={canvasRef}
      className={`particle-canvas ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}

export default memo(ParticleBackground)