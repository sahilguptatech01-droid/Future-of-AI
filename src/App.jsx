import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/hero/HeroSection'
import EvolutionSection from './components/sections/EvolutionSection'
import AgentExplanation from './components/sections/AgentExplanation'
import CollaborationSection from './components/sections/CollaborationSection'
import ImpactSection from './components/sections/ImpactSection'
import FutureSection from './components/sections/FutureSection'
import LearningSection from './components/sections/LearningSection'
import FinalCTA from './components/sections/FinalCTA'

export default function App() {
  return (
    <div className="site-wrapper">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <EvolutionSection />
        <AgentExplanation />
        <CollaborationSection />
        <ImpactSection />
        <FutureSection />
        <LearningSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
