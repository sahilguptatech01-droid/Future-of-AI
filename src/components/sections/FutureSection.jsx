import { ArrowUpRight, Cpu, Network, Bot, Check } from 'lucide-react'
import { futureHorizons } from '../../data/agents'
import SectionHeading from '../ui/SectionHeading'
import ImageWithFallback from '../ui/ImageWithFallback'

const horizonIcons = [Network, Cpu, Bot]

export default function FutureSection() {
  return (
    <section className="section" id="future">
      <div className="section-container">
        <SectionHeading
          index="05"
          label="THE COMING FRONTIER"
          title="Architectural breakthroughs defining the next decade."
          copy="Beyond simple chat interfaces lie sovereign cognitive models, planetary computing clusters, and tactile physical systems capable of acting reliably in the real world."
        />

        <div className="future-stack" aria-label="Future AI Frontiers">
          {futureHorizons.map((item, index) => {
            const Icon = horizonIcons[index] || Cpu
            const isReversed = index % 2 === 1

            return (
              <article
                key={item.id}
                className={`future-feature-card ${isReversed ? 'future-feature-reversed' : ''}`}
              >
                {/* Visual side with genuine high-resolution Pexels image */}
                <div className="future-feature-media">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.alt}
                    aspectRatio="16 / 10"
                    className="future-feature-image"
                  />
                  <div className="future-feature-badge-overlay">
                    <Icon size={16} className="future-feature-icon" aria-hidden="true" />
                    <span>FRONTIER {item.id}</span>
                  </div>
                </div>

                {/* Narrative content */}
                <div className="future-feature-content">
                  <div className="future-feature-eyebrow">
                    <span className="future-feature-number">{item.id}</span>
                    <span className="future-feature-divider" aria-hidden="true">/</span>
                    <span className="future-feature-label">{item.label}</span>
                  </div>

                  <h3 className="future-feature-title">{item.title}</h3>
                  <p className="future-feature-text">{item.text}</p>

                  <div className="future-feature-highlight">
                    <Check size={14} className="future-feature-check" aria-hidden="true" />
                    <span>{item.highlight}</span>
                  </div>

                  <div className="future-feature-action">
                    <a href="#learn" className="future-feature-link">
                      <span>Explore research papers & curriculum</span>
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
