interface SectionProps {
  id: string
  children: React.ReactNode
  className?: string
  fullHeight?: boolean  // default true, sets min-h-dvh
  background?: 'primary' | 'secondary' | 'tertiary'
}

export default function Section({
  id,
  children,
  className = '',
  fullHeight = true,
  background = 'primary',
}: SectionProps) {
  const bgClass = {
    primary: 'bg-white',
    secondary: 'bg-gray-50', // var(--color-bg-secondary)
    tertiary: 'bg-gray-100', // var(--color-bg-tertiary)
  }[background]

  return (
    <section
      id={id}
      data-section={id}
      className={`
        ${bgClass}
        ${fullHeight ? 'min-h-dvh' : ''}
        py-[var(--section-padding)]
        px-[var(--container-padding)]
        ${className}
      `}
      style={{
        backgroundColor: `var(--color-bg-${background})`,
      }}
    >
      <div className="mx-auto max-w-[var(--max-w-content)]">
        {children}
      </div>
    </section>
  )
}