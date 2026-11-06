import { ArrowUpRight } from 'lucide-react'

/**
 * Reusable Button Component
 * Inspired by Apple/Stripe button ergonomics: subtle depth, micro-interactions,
 * clear typography, and accessible focus states.
 */
export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  showArrow = true,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const combinedClasses = `btn btn-${variant} btn-${size} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        <span className="btn-label">{children}</span>
        {showArrow && <ArrowUpRight className="btn-icon" size={16} aria-hidden="true" />}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      <span className="btn-label">{children}</span>
      {showArrow && <ArrowUpRight className="btn-icon" size={16} aria-hidden="true" />}
    </button>
  )
}
