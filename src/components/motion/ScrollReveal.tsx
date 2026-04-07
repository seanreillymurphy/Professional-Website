'use client'

import { motion } from 'motion/react'
import { fadeUp, fadeUpBlur, scaleUp, slideLeft, slideRight } from '@/lib/animations'

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: 'fadeUp' | 'fadeUpBlur' | 'scaleUp' | 'slideLeft' | 'slideRight'
  delay?: number
  className?: string
}

const variantMap = {
  fadeUp,
  fadeUpBlur,
  scaleUp,
  slideLeft,
  slideRight,
}

export default function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const selectedVariant = variantMap[variant]

  return (
    <motion.div
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}