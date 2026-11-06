import { User, Network, CheckCircle2, ArrowDown, GitBranch, GitPullRequest, Search, Palette, Code2, ShieldCheck } from 'lucide-react'
import { agents } from '../../data/agents'
import SectionHeading from '../ui/SectionHeading'

const agentIcons = {
  'agent-research': Search,
  'agent-design': Palette,
  'agent-coding': Code2,
  'agent-testing': ShieldCheck
}

export default function CollaborationSection() {
  return (
    <section className="section" id="collaboration">
      <div className="section-container">
        <SectionHeading
          index="03"
          label="MULTI-AGENT ORCHESTRATION"
          title="One shared objective. Specialized intelligences."
          copy="Complex projects exceed the single-prompt capacity of any individual model. A hierarchical supervisor decomposes challenges, provisions specialized agent workstreams, and arbitrates consensus across diverse disciplines."
        />

        {/* System Architecture Tree */}
        <div className="architecture-canvas" aria-label="Hierarchical Agent Architecture Diagram">
          {/* Top Node: Human Specification */}
          <div className="arch-card arch-card-user">
            <div className="arch-card-icon" aria-hidden="true">
              <User size={18} />
            </div>
            <div className="arch-card-content">
              <span className="arch-card-kicker">HUMAN INTENT & OBJECTIVE</span>
              <strong className="arch-card-title">"Ship a production-grade multi-agent dashboard"</strong>
            </div>
            <span className="arch-card-pill">DIRECTIVE</span>
          </div>

          <div className="arch-connector" aria-hidden="true">
            <div className="arch-line" />
            <ArrowDown size={14} className="arch-arrow" />
          </div>

          {/* Central Supervisor Node */}
          <div className="arch-card arch-card-orchestrator">
            <div className="arch-card-icon" aria-hidden="true">
              <Network size={18} />
            </div>
            <div className="arch-card-content">
              <span className="arch-card-kicker">SUPERVISOR & ROUTING ENGINE</span>
              <strong className="arch-card-title">Autonomous Task Orchestrator</strong>
              <p className="arch-card-desc">
                Parses dependencies, generates isolated worktrees, and delegates execution contracts.
              </p>
            </div>
            <span className="arch-card-status">
              <span className="arch-status-pip" aria-hidden="true" />
              DISPATCHING PARALLEL JOBS
            </span>
          </div>

          <div className="arch-connector" aria-hidden="true">
            <div className="arch-line" />
            <ArrowDown size={14} className="arch-arrow" />
          </div>

          {/* Specialized Agents Grid */}
          <div className="arch-specialists-grid" aria-label="Specialized Autonomous Subagents">
            {agents.map((agent) => {
              const Icon = agentIcons[agent.id] || Search
              return (
                <article key={agent.id} className={`arch-agent-card arch-agent-${agent.tone}`}>
                  <div className="arch-agent-header">
                    <div className="arch-agent-icon" aria-hidden="true">
                      <Icon size={16} />
                    </div>
                    <span className="arch-agent-role">{agent.role}</span>
                  </div>

                  <h3 className="arch-agent-title">{agent.name}</h3>
                  <p className="arch-agent-detail">{agent.detail}</p>

                  <div className="arch-agent-capabilities">
                    {agent.capabilities?.map((cap) => (
                      <span key={cap} className="arch-agent-cap-tag">
                        {cap}
                      </span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>

          <div className="arch-connector" aria-hidden="true">
            <div className="arch-line" />
            <ArrowDown size={14} className="arch-arrow" />
          </div>

          {/* Bottom Node: Synthesized Deliverable */}
          <div className="arch-card arch-card-deliverable">
            <div className="arch-card-icon" aria-hidden="true">
              <CheckCircle2 size={18} />
            </div>
            <div className="arch-card-content">
              <span className="arch-card-kicker">UNIFIED SYNTHESIS</span>
              <strong className="arch-card-title">Verified Production Artifacts</strong>
              <p className="arch-card-desc">
                All unit tests passed, documentation generated, and code reviewed for human approval.
              </p>
            </div>
            <span className="arch-card-pill arch-card-pill-success">READY FOR DEPLOYMENT</span>
          </div>
        </div>

        {/* Deep Dive Case Study Row */}
        <div className="arch-summary-box">
          <div className="arch-summary-column">
            <div className="section-eyebrow">
              <GitPullRequest size={13} className="mr-1" aria-hidden="true" />
              <span className="section-eyebrow-label">PRODUCTION WORKFLOW</span>
            </div>
            <h3 className="arch-summary-title">Deterministic handoffs between specialized systems.</h3>
          </div>
          <div className="arch-summary-content">
            <p>
              In traditional development, bottlenecks occur during coordination handoffs between
              research, design, engineering, and QA. Autonomous multi-agent pipelines eliminate
              synchronous latency: agents produce structured artifacts adhering to shared JSON schema
              interfaces, validate inputs against formal boundary contracts, and self-resolve minor
              discrepancies before presenting the synthesized release to the engineering lead.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
