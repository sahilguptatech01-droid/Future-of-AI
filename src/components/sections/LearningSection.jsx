import { BookOpen, ArrowUpRight, Clock, Award, CheckCircle2 } from 'lucide-react'
import { learningPaths } from '../../data/agents'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

export default function LearningSection() {
  return (
    <section className="section section-surface" id="learn">
      <div className="section-container">
        <SectionHeading
          index="06"
          label="ENGINEERING CURRICULUM"
          title="Don't just prompt AI. Architect autonomous systems."
          copy="A comprehensive, production-oriented syllabus designed to take software engineers from foundational LLM mechanics to enterprise multi-agent deployment."
        />

        <div className="learning-grid">
          {/* Left Column: Curriculum Overview & Callout */}
          <div className="learning-overview-card">
            <div className="learning-overview-icon" aria-hidden="true">
              <BookOpen size={24} />
            </div>

            <div className="section-eyebrow">
              <span className="section-eyebrow-label">STRUCTURED MASTERY</span>
            </div>

            <h3 className="learning-overview-title">From conceptual understanding to shipping production swarms.</h3>

            <p className="learning-overview-copy">
              Autonomous software engineering requires a rigorous synthesis of distributed systems,
              prompt engineering, strict sandboxing, and evaluation harnesses. Each stage includes
              hands-on reference repositories and automated integration tests.
            </p>

            <div className="learning-overview-highlights">
              <div className="learning-highlight-row">
                <CheckCircle2 size={15} className="learning-highlight-icon" aria-hidden="true" />
                <span>5 comprehensive progressive modules</span>
              </div>
              <div className="learning-highlight-row">
                <CheckCircle2 size={15} className="learning-highlight-icon" aria-hidden="true" />
                <span>Production multi-agent repo templates</span>
              </div>
              <div className="learning-highlight-row">
                <CheckCircle2 size={15} className="learning-highlight-icon" aria-hidden="true" />
                <span>Safety benchmarks & red-teaming test suites</span>
              </div>
            </div>

            <div className="learning-overview-cta">
              <Button href="#final-cta" variant="primary" size="md">
                Enroll in the Builder Track
              </Button>
            </div>
          </div>

          {/* Right Column: Progressive Module List */}
          <div className="learning-modules-list" role="list" aria-label="Curriculum Modules">
            {learningPaths.map((item) => (
              <article key={item.step} className="learning-module-item" role="listitem">
                <div className="learning-module-step">
                  <span>{item.step}</span>
                </div>

                <div className="learning-module-body">
                  <div className="learning-module-meta">
                    <span className="learning-module-level">{item.level}</span>
                    <span className="learning-module-duration">
                      <Clock size={12} className="mr-1 inline" aria-hidden="true" />
                      {item.duration}
                    </span>
                  </div>

                  <h4 className="learning-module-title">{item.title}</h4>
                  <p className="learning-module-desc">{item.description}</p>
                </div>

                <div className="learning-module-action" aria-hidden="true">
                  <ArrowUpRight size={18} className="learning-module-arrow" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
