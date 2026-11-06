import { Search, Palette, Code2, ShieldCheck, Terminal, Cpu, Network, Layers, Sparkles } from 'lucide-react'

/**
 * Multi-Agent System Roles
 * Specialized autonomous agents designed for end-to-end task execution.
 */
export const agents = [
  {
    id: 'agent-research',
    name: 'Research Agent',
    role: 'Context & Knowledge Retrieval',
    detail: 'Indexes documentation, discovers API contracts, and extracts domain patterns.',
    icon: Search,
    tone: 'blue',
    capabilities: ['Semantic search', 'Context synthesis', 'Source verification']
  },
  {
    id: 'agent-design',
    name: 'Design Agent',
    role: 'Experience Architecture',
    detail: 'Transforms structural requirements into accessible, responsive interface systems.',
    icon: Palette,
    tone: 'violet',
    capabilities: ['Design tokens', 'Layout geometry', 'Accessibility compliance']
  },
  {
    id: 'agent-coding',
    name: 'Engineering Agent',
    role: 'Production Implementation',
    detail: 'Constructs performant, type-safe modules and integrates functional interfaces.',
    icon: Code2,
    tone: 'cyan',
    capabilities: ['Component architecture', 'State orchestration', 'Performance tuning']
  },
  {
    id: 'agent-testing',
    name: 'Verification Agent',
    role: 'Quality & Safety Audit',
    detail: 'Evaluates edge cases, validates keyboard navigation, and runs automated assertions.',
    icon: ShieldCheck,
    tone: 'emerald',
    capabilities: ['Heuristic review', 'Regression safety', 'Stress testing']
  }
]

/**
 * Real-World Impact Initiatives
 * Genuine, high-resolution Pexels photography curated for AI applications in critical sectors.
 */
export const impact = [
  {
    number: '01',
    title: 'Healthcare & Diagnostics',
    tag: 'Clinical Intelligence',
    copy: 'Accelerating diagnostic research, patient intake triage, and automated synthesis so clinicians can focus on compassionate human care.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'High-tech biomedical research laboratory with automated diagnostic equipment',
    metric: '4.8x faster diagnostic triage'
  },
  {
    number: '02',
    title: 'Adaptive Learning',
    tag: 'Cognitive Education',
    copy: 'Providing personalized Socratic tutoring, real-time curriculum adaptation, and automated grading assistance for overburdened teachers.',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Students collaborating with digital educational platforms and interactive displays',
    metric: 'Individualized pace for all learners'
  },
  {
    number: '03',
    title: 'Precision Agriculture',
    tag: 'Resilient Food Systems',
    copy: 'Fusing satellite telemetry, micro-climate weather forecasts, and soil moisture sensors to maximize yields while conserving vital water tables.',
    image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Precision agricultural sensors deployed across expansive sustainable crop fields',
    metric: '32% reduction in water consumption'
  },
  {
    number: '04',
    title: 'Planetary Systems',
    tag: 'Climate & Conservation',
    copy: 'Deploying autonomous sensor networks to track biodiversity changes, predict wildfire vectors, and evaluate carbon capture efficacy globally.',
    image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Atmospheric satellite perspective of Earth showing weather fronts and ecosystems',
    metric: 'Continuous global biosphere telemetry'
  }
]

/**
 * Future Horizons
 * Curated deep-dives with genuine Pexels imagery illustrating next-generation intelligence.
 */
export const futureHorizons = [
  {
    id: '01',
    title: 'Personal Cognitive Partners',
    label: 'CONTEXTUAL ADAPTABILITY',
    text: 'Sovereign digital partners that maintain secure local memory, anticipate complex requirements, and orchestrate daily workflows while preserving user privacy.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Human-AI engineering and strategy team collaborating over unified workflow diagrams',
    highlight: 'Zero-retention local contextual memory'
  },
  {
    id: '02',
    title: 'Autonomous Swarm Orchestration',
    label: 'DISTRIBUTED INTELLIGENCE',
    text: 'Enterprise-grade ecosystems where dozens of specialized agents negotiate tasks, resolve merge conflicts, and execute high-reliability operations under human guardrails.',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'High-density accelerated neural computing cluster and fiber-optic data center',
    highlight: 'Deterministic supervisor protocols'
  },
  {
    id: '03',
    title: 'Embodied & Physical AI',
    label: 'PERCEPTION TO ACTUATION',
    text: 'Bridging foundation models into the physical realm through tactile sensing, spatial vision, and robotic dexterity capable of safe human-adjacent collaboration.',
    image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Precision robotic arm with high-dexterity micro-actuators in cleanroom environment',
    highlight: 'Sub-millimeter spatial actuation'
  }
]

/**
 * Structured Learning Tracks
 * Developer and architect curriculum for building autonomous systems.
 */
export const learningPaths = [
  {
    step: '01',
    title: 'Agentic Foundations & Cognitive Loops',
    description: 'Master the fundamental mechanics of reasoning loops, context window hygiene, and multi-turn conversational state.',
    duration: '2 Weeks',
    level: 'Fundamental'
  },
  {
    step: '02',
    title: 'Tool Augmentation & Dynamic Calling',
    description: 'Equip models with structured function calling, external database access, API orchestration, and strict error handling.',
    duration: '3 Weeks',
    level: 'Core'
  },
  {
    step: '03',
    title: 'Multi-Agent Protocols & Supervisor Routing',
    description: 'Design deterministic supervisor hierarchies, peer negotiation handoffs, and distributed consensus mechanisms.',
    duration: '3 Weeks',
    level: 'Advanced'
  },
  {
    step: '04',
    title: 'Guardrails, Safety & Observability',
    description: 'Implement rigorous assertion boundaries, prompt injection mitigation, red-teaming harnesses, and distributed tracing.',
    duration: '2 Weeks',
    level: 'Production'
  },
  {
    step: '05',
    title: 'Embodied Systems & Edge Deployment',
    description: 'Deploy quantized agent models on local devices, connect real-time sensor streams, and execute low-latency actuation.',
    duration: '4 Weeks',
    level: 'Specialization'
  }
]
