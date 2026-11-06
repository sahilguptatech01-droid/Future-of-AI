import { HeartPulse, GraduationCap, Sprout, Globe, ArrowUpRight } from 'lucide-react'
import { impact } from '../../data/agents'
import SectionHeading from '../ui/SectionHeading'
import ImageWithFallback from '../ui/ImageWithFallback'

const sectorIcons = [HeartPulse, GraduationCap, Sprout, Globe]

export default function ImpactSection() {
  return (
    <section className="section section-surface" id="impact">
      <div className="section-container">
        <SectionHeading
          index="04"
          label="REAL-WORLD APPLICATIONS"
          title="Technology that elevates human capability."
          copy="The most profound impact of autonomous agents is not replacing people, but augmenting human domain expertise in complex fields that demand high-stakes analytical rigor."
        />

        <div className="impact-grid" aria-label="Real-World Impact Case Studies">
          {impact.map((item, index) => {
            const Icon = sectorIcons[index] || Globe
            return (
              <article key={item.title} className="impact-card">
                {/* Media Container with Pexels genuine photography and graceful fallback */}
                <div className="impact-media-wrapper">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.alt}
                    aspectRatio="16 / 10"
                    className="impact-image"
                  />
                  <div className="impact-media-top">
                    <span className="impact-index-pill">{item.number}</span>
                    <div className="impact-icon-badge" aria-hidden="true">
                      <Icon size={16} />
                    </div>
                  </div>
                  <div className="impact-metric-pill" aria-label="Key Impact Metric">
                    <span>{item.metric}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="impact-body">
                  <span className="impact-tag">{item.tag}</span>
                  <h3 className="impact-title">{item.title}</h3>
                  <p className="impact-copy">{item.copy}</p>

                  <div className="impact-footer">
                    <a
                      href="#learn"
                      className="impact-link"
                      aria-label={`Explore educational tracks for ${item.title}`}
                    >
                      <span>Explore domain curriculum</span>
                      <ArrowUpRight size={14} className="impact-link-arrow" aria-hidden="true" />
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
