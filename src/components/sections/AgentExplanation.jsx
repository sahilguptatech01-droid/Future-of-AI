import { Eye, BrainCircuit, Play, RotateCcw, ArrowRight, ShieldCheck, Database, Wrench } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const loopStages = [
  {
    step: '01',
    name: 'Perceive',
    badge: 'STATE INGESTION',
    icon: Eye,
    headline: 'Continuous Context Sensing',
    description: 'The agent actively inspects environmental variables, token streams, file trees, API responses, and user intentions to establish grounded situational awareness.',
    details: ['DOM & AST parsing', 'Live telemetry hooks', 'Semantic context indexing']
  },
  {
    step: '02',
    name: 'Plan',
    badge: 'COGNITIVE REASONING',
    icon: BrainCircuit,
    headline: 'Hierarchical Decomposition',
    description: 'Rather than predicting tokens indiscriminately, the agent formulates a directed acyclic graph (DAG) of subtasks, checking boundaries and fallback contingencies.',
    details: ['Subgoal formulation', 'Constraint verification', 'Tool selection strategies']
  },
  {
    step: '03',
    name: 'Act',
    badge: 'EXTERNAL EXECUTION',
    icon: Play,
    headline: 'Grounded Tool Execution',
    description: 'The system transitions from thought to external action: invoking verified APIs, executing sandboxed shell commands, editing repositories, or querying databases.',
    details: ['Sandboxed execution', 'Parameterized API calls', 'File mutation protocols']
  },
  {
    step: '04',
    name: 'Reflect',
    badge: 'FEEDBACK & HEALING',
    icon: RotateCcw,
    headline: 'Iterative Self-Correction',
    description: 'Every action yields a measurable output. The agent evaluates return codes and stack traces against expected outcomes, refining its internal plan when tests fail.',
    details: ['Automated test review', 'Error trace synthesis', 'Dynamic plan adaptation']
  }
]

export default function AgentExplanation() {
  return (
    <section className="section section-surface" id="agents">
      <div className="section-container">
        <SectionHeading
          index="02"
          label="THE AUTONOMOUS LOOP"
          title="Bridging high-level reasoning to measurable action."
          copy="Unlike reactive conversational models that stop at generating text, an autonomous agent executes a persistent closed-loop cycle: observing reality, deciding the next best action, manipulating its environment, and adapting to real-world feedback."
        />

        {/* 4-Column Architectural Stage Grid */}
        <div className="agent-loop-grid">
          {loopStages.map((stage) => {
            const Icon = stage.icon
            return (
              <article key={stage.step} className="agent-loop-card">
                <div className="agent-loop-card-top">
                  <span className="agent-loop-step">{stage.step}</span>
                  <span className="agent-loop-badge">{stage.badge}</span>
                </div>

                <div className="agent-loop-icon-box" aria-hidden="true">
                  <Icon size={20} className="agent-loop-icon" />
                </div>

                <div className="agent-loop-body">
                  <h3 className="agent-loop-title">{stage.name}</h3>
                  <h4 className="agent-loop-subtitle">{stage.headline}</h4>
                  <p className="agent-loop-description">{stage.description}</p>
                </div>

                <ul className="agent-loop-details" aria-label={`${stage.name} capabilities`}>
                  {stage.details.map((item) => (
                    <li key={item} className="agent-loop-detail-item">
                      <span className="agent-loop-detail-dot" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        {/* Engineered Architecture Pipeline Banner */}
        <div className="pipeline-banner" aria-label="Continuous Execution Pipeline">
          <div className="pipeline-header">
            <span className="pipeline-label">REASONING PIPELINE</span>
            <span className="pipeline-status">
              <span className="pipeline-status-indicator" /> CLOSED-LOOP CONVERGENCE
            </span>
          </div>

          <div className="pipeline-nodes">
            <div className="pipeline-node">
              <Eye size={15} className="pipeline-node-icon" aria-hidden="true" />
              <div className="pipeline-node-text">
                <strong>INPUT STATE</strong>
                <span>Context Ingestion</span>
              </div>
            </div>

            <ArrowRight size={16} className="pipeline-arrow" aria-hidden="true" />

            <div className="pipeline-node">
              <BrainCircuit size={15} className="pipeline-node-icon" aria-hidden="true" />
              <div className="pipeline-node-text">
                <strong>REASONING</strong>
                <span>DAG Planner</span>
              </div>
            </div>

            <ArrowRight size={16} className="pipeline-arrow" aria-hidden="true" />

            <div className="pipeline-node">
              <Wrench size={15} className="pipeline-node-icon" aria-hidden="true" />
              <div className="pipeline-node-text">
                <strong>TOOL DISPATCH</strong>
                <span>Sandboxed Execution</span>
              </div>
            </div>

            <ArrowRight size={16} className="pipeline-arrow" aria-hidden="true" />

            <div className="pipeline-node pipeline-node-accent">
              <RotateCcw size={15} className="pipeline-node-icon" aria-hidden="true" />
              <div className="pipeline-node-text">
                <strong>EVALUATION</strong>
                <span>Self-Correction Loop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
