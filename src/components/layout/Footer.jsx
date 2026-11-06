import { ArrowUp, Radio } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-root" role="contentinfo" aria-label="Site Footer">
      <div className="section-container footer-container">
        <div className="footer-top-row">
          <div className="footer-brand-column">
            <a href="#top" className="navbar-brand footer-brand" aria-label="Future AI Home">
              <span className="navbar-logo-badge" aria-hidden="true">
                <span className="navbar-logo-dot" />
              </span>
              <span className="navbar-brand-text">
                FUTURE<span className="navbar-brand-divider">/</span>AI
              </span>
            </a>
            <p className="footer-tagline">
              Engineering rigorous autonomous agent architectures, multi-agent protocols, and human-in-the-loop systems.
            </p>
            <div className="footer-status-pill" aria-label="System status">
              <span className="footer-status-dot" aria-hidden="true" />
              <span>All Agent Network Services Operational</span>
            </div>
          </div>

          <div className="footer-nav-groups">
            <div className="footer-nav-col">
              <span className="footer-nav-heading">Platform</span>
              <ul className="footer-nav-list">
                <li><a href="#evolution">The Evolution</a></li>
                <li><a href="#agents">The Agent Loop</a></li>
                <li><a href="#collaboration">Multi-Agent Swarms</a></li>
                <li><a href="#future">Future Horizons</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <span className="footer-nav-heading">Curriculum</span>
              <ul className="footer-nav-list">
                <li><a href="#learn">Cognitive Loops</a></li>
                <li><a href="#learn">Tool Calling</a></li>
                <li><a href="#learn">Orchestration Protocols</a></li>
                <li><a href="#learn">Safety & Guardrails</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <span className="footer-nav-heading">Impact</span>
              <ul className="footer-nav-list">
                <li><a href="#impact">Healthcare & Triage</a></li>
                <li><a href="#impact">Adaptive Learning</a></li>
                <li><a href="#impact">Precision Agriculture</a></li>
                <li><a href="#impact">Planetary Systems</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-legal">
            <span>© {new Date().getFullYear()} FUTURE/AI Systems Inc. All rights reserved.</span>
            <span className="footer-separator" aria-hidden="true">·</span>
            <span>Architected with minimalism and precision.</span>
          </div>

          <div className="footer-actions">
            <button
              type="button"
              onClick={scrollToTop}
              className="footer-back-to-top"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
