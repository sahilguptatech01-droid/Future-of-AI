import { Terminal, MessageSquare, Workflow, Network, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const stages = [
  {
    step: '01',
    era: 'Deterministic Code',
    badge: 'RULE-BASED',
    title: 'Traditional Computing',
    description: 'Computers strictly execute hardcoded rules and deterministic algorithms, unable to interpret ambiguity or extrapolate beyond their explicit code paths.',
    icon: Terminal,
    capability: 'Fixed logic & scripts'
  },
  {
    step: '02',
    era: 'Natural Language',
    badge: 'RESPONSIVE',
    title: 'AI Assistants & Chatbots',
    description: 'Foundation models parse nuanced intent, summarize vast context, and generate fluent responses, but remain passive without tool execution capabilities.',
    icon: MessageSquare,
    capability: 'Knowledge synthesis'
  },
  {
    step: '03',
    era: 'Goal-Directed',
    badge: 'AUTONOMOUS',
    title: 'Autonomous AI Agents',
    description: 'Systems break high-level goals into tactical plans, call APIs, run shell commands, parse output errors, and iterate until the objective is accomplished.',
    icon: Workflow,
    capability: 'Tool calling & iteration'
  },
  {
    step: '04',
    era: 'Swarm Intelligence',
    badge: 'COLLECTIVE',
    title: 'Multi-Agent Ecosystems',
    description: 'Networks of specialized agents communicate over shared protocols, delegating tasks, reviewing code, and cross-verifying outputs in synchronized harmony.',
    icon: Network,
    capability: 'Consensus & orchestration'
  }
]

export default function EvolutionSection() {
  return (
    <section className="section section-evolution" id="evolution">
      <div className="section-container">
        <SectionHeading
          index="01"
          label="THE PARADIGM SHIFT"
          title="From static software to collaborative intelligence."
          copy="A generational transition from systems that merely follow rigid instructions to autonomous partners that proactively carry work across the finish line."
        />

        <div className="evolution-grid">
          {stages.map((stage, idx) => {
            const Icon = stage.icon
            return (
              <article key={stage.step} className="evolution-card">
                <div className="evolution-card-header">
                  <span className="evolution-step-index">{stage.step}</span>
                  <span className="evolution-badge">{stage.badge}</span>
                </div>

                <div className="evolution-icon-wrapper" aria-hidden="true">
                  <Icon size={20} className="evolution-icon" />
                </div>

                <div className="evolution-card-body">
                  <span className="evolution-era">{stage.era}</span>
                  <h3 className="evolution-title">{stage.title}</h3>
                  <p className="evolution-desc">{stage.description}</p>
                </div>

                <div className="evolution-card-footer">
                  <CheckCircle2 size={13} className="evolution-check-icon" aria-hidden="true" />
                  <span className="evolution-capability">{stage.capability}</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
