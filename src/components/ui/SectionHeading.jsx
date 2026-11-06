/**
 * SectionHeading Component
 * Clean typographic structure with subtle category badge, primary headline,
 * and descriptive lede paragraph. Follows Apple/Stripe hierarchy.
 */
export default function SectionHeading({
  index,
  label,
  title,
  copy,
  centered = false,
  className = ''
}) {
  return (
    <header className={`section-header ${centered ? 'section-header-centered' : ''} ${className}`}>
      {(index || label) && (
        <div className="section-eyebrow">
          {index && <span className="section-eyebrow-index">{index}</span>}
          {index && label && <span className="section-eyebrow-divider" aria-hidden="true">/</span>}
          {label && <span className="section-eyebrow-label">{label}</span>}
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </header>
  )
}
