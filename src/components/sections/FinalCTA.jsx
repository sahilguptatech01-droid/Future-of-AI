import { ArrowUpRight, Sparkles, Terminal, Code } from 'lucide-react'
import Button from '../ui/Button'

export default function FinalCTA() {
  return (
    <section className="section-cta" id="final-cta" aria-label="Call to Action">
      <div className="cta-ambient-backdrop" aria-hidden="true" />

      <div className="section-container cta-container">
        <div className="section-eyebrow cta-eyebrow">
          <span className="section-eyebrow-pip" aria-hidden="true" />
          <span className="section-eyebrow-label">JOIN THE AGENTIC SHIFT</span>
        </div>

        <h2 className="cta-title">
          The future of software is autonomous.
          <span className="cta-title-accent"> Build what comes next.</span>
        </h2>

        <p className="cta-description">
          Whether you are an architect designing enterprise multi-agent networks or an engineer
          exploring tool-calling loops for the first time, the primitives for autonomous computing
          are ready today.
        </p>

        <div className="cta-actions">
          <Button href="#top" variant="primary" size="lg">
            Start Building with FUTURE/AI
          </Button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary-link"
          >
            <Code size={15} aria-hidden="true" />
            <span>Explore Open Reference Architectures</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="cta-badges" aria-label="System Guarantees">
          <div className="cta-badge-item">
            <span className="cta-badge-dot" aria-hidden="true" />
            <span>Open Architecture Standards</span>
          </div>
          <div className="cta-badge-divider" aria-hidden="true" />
          <div className="cta-badge-item">
            <span className="cta-badge-dot" aria-hidden="true" />
            <span>Strict Human-in-the-Loop Safeguards</span>
          </div>
          <div className="cta-badge-divider" aria-hidden="true" />
          <div className="cta-badge-item">
            <span className="cta-badge-dot" aria-hidden="true" />
            <span>Zero Proprietary Lock-In</span>
          </div>
        </div>
      </div>
    </section>
  )
}
