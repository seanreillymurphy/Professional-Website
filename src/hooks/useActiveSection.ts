'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const sections = document.querySelectorAll('[data-section]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.getAttribute('data-section')
            if (sectionId && sectionId !== activeSection) {
              setActiveSection(sectionId)
              // Update URL hash with throttling
              setTimeout(() => {
                history.replaceState(null, '', `#${sectionId}`)
              }, 100)
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [activeSection])

  return activeSection
}