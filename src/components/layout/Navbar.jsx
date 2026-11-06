import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Evolution', href: '#evolution' },
  { label: 'Agent Loop', href: '#agents' },
  { label: 'Multi-Agent', href: '#collaboration' },
  { label: 'Real-World Impact', href: '#impact' },
  { label: 'Curriculum', href: '#learn' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#top" className="navbar-brand" aria-label="Future AI Agents Home">
          <span className="navbar-logo-badge" aria-hidden="true">
            <span className="navbar-logo-dot" />
          </span>
          <span className="navbar-brand-text">
            FUTURE<span className="navbar-brand-divider">/</span>AI
          </span>
        </a>

        <nav className="navbar-links" aria-label="Main Navigation">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className="navbar-link">
              {label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <Button href="#learn" size="sm" variant="primary">
            Start Building
          </Button>

          <button
            type="button"
            className="navbar-mobile-toggle"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`navbar-mobile-drawer ${isOpen ? 'navbar-mobile-drawer-open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="navbar-mobile-links">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="navbar-mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="navbar-mobile-cta">
            <Button
              href="#learn"
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Start Building
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
