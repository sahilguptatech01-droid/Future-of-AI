import { ArrowDown, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react'
import Button from '../ui/Button'
import AnimationPlaceholder from './AnimationPlaceholder'

export default function HeroSection() {
  return (
    <section className="hero-section" id="top" aria-label="Hero Overview">
      <div className="hero-backdrop" aria-hidden="true" />

      <div className="hero-content">
        {/* Status Eyebrow */}
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-pip" aria-hidden="true" />
          <span className="hero-eyebrow-text">THE NEXT ERA OF COMPUTING</span>
          <span className="hero-eyebrow-tag">AUTONOMOUS SYSTEMS</span>
        </div>

        {/* Primary Headline */}
        <h1 className="hero-title">
          The future is not just artificial.
          <span className="hero-title-accent"> It is autonomous.</span>
        </h1>

        {/* Descriptive Lede */}
        <p className="hero-description">
          Moving beyond simple prompt-and-response assistants. Explore how goal-directed
          software agents perceive context, formulate plans, invoke external tools, and
          collaborate to solve complex multi-step challenges.
        </p>

        {/* Call to Actions */}
        <div className="hero-actions">
          <Button href="#evolution" variant="primary" size="lg">
            Explore the Architecture
          </Button>
          <a href="#agents" className="hero-secondary-link">
            <span>Understand the Agent Loop</span>
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        {/* Architectural Pillars Spec */}
        <div className="hero-specs" aria-label="Core Architectural Capabilities">
          <div className="hero-spec-item">
            <Zap size={14} className="hero-spec-icon" aria-hidden="true" />
            <span>Autonomous Tool Execution</span>
          </div>
          <div className="hero-spec-divider" aria-hidden="true" />
          <div className="hero-spec-item">
            <Layers size={14} className="hero-spec-icon" aria-hidden="true" />
            <span>Multi-Agent Swarm Handoffs</span>
          </div>
          <div className="hero-spec-divider" aria-hidden="true" />
          <div className="hero-spec-item">
            <ShieldCheck size={14} className="hero-spec-icon" aria-hidden="true" />
            <span>Human-in-the-Loop Guardrails</span>
          </div>
        </div>
      </div>

      {/* Reserved Animation Placeholder (Strictly empty per instructions) */}
      <div className="hero-stage">
        <AnimationPlaceholder />
      </div>

      {/* Minimal Scroll Cue */}
      <a href="#evolution" className="hero-scroll-cue" aria-label="Scroll to Evolution Section">
        <span className="hero-scroll-label">SCROLL TO EXPLORE</span>
        <ArrowDown size={14} className="hero-scroll-icon" aria-hidden="true" />
      </a>
    </section>
  )
}
