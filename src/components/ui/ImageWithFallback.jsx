import { useState } from 'react'
import { Image as ImageIcon } from 'lucide-react'

/**
 * ImageWithFallback component
 * Enforces consistent aspect ratio, smooth loading transition, and a clean fallback
 * when network or external CDN assets are restricted or slow.
 */
export default function ImageWithFallback({
  src,
  alt,
  className = '',
  aspectRatio = '16 / 10',
  priority = false,
  ...props
}) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={`media-container ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={alt}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`media-image ${isLoaded ? 'media-loaded' : 'media-loading'}`}
          {...props}
        />
      ) : (
        <div className="media-fallback" aria-hidden="true">
          <ImageIcon className="media-fallback-icon" size={28} />
          <span className="media-fallback-text">{alt || 'Image preview'}</span>
        </div>
      )}
      <div className="media-overlay" aria-hidden="true" />
    </div>
  )
}
