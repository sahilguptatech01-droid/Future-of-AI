import { useEffect, useState } from 'react'
import { Check, Globe2, LoaderCircle, Terminal } from 'lucide-react'

const promptText = 'Build a sleek AI studio landing page with a live preview'
const commands = [
  { command: 'npx create-vite@latest studio -- --template react', output: 'Scaffolding project files…', progress: 28 },
  { command: 'npm install && npm run dev', output: 'Dependencies ready · dev server running', progress: 61 },
  { command: 'ai generate --prompt ./brief.md', output: 'Generating responsive components…', progress: 88 },
]

const generatedLines = [
  '<main className="studio">',
  '  <Hero title="Ideas, made real." />',
  '  <PromptInput placeholder="Describe your vision…" />',
  '  <Button variant="glow">Start building <ArrowUpRight /></Button>',
  '</main>',
]

export default function AnimationPlaceholder() {
  const [phase, setPhase] = useState('prompt')
  const [typedPrompt, setTypedPrompt] = useState('')
  const [commandIndex, setCommandIndex] = useState(-1)
  const [typedCommand, setTypedCommand] = useState('')
  const [progress, setProgress] = useState(0)
  const [codeLines, setCodeLines] = useState(0)
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    let cancelled = false
    const timers = new Set()
    const wait = (ms) => new Promise((resolve) => {
      const timer = window.setTimeout(() => {
        timers.delete(timer)
        resolve()
      }, ms)
      timers.add(timer)
    })

    const typeText = async (text, setter, speed) => {
      for (let i = 1; i <= text.length && !cancelled; i += 1) {
        setter(text.slice(0, i))
        await wait(speed)
      }
    }

    const play = async () => {
      while (!cancelled) {
        setPhase('prompt')
        setTypedPrompt('')
        setCommandIndex(-1)
        setTypedCommand('')
        setProgress(0)
        setCodeLines(0)
        await wait(500)
        await typeText(promptText, setTypedPrompt, 34)
        if (cancelled) break
        await wait(550)

        for (let i = 0; i < commands.length && !cancelled; i += 1) {
          setPhase('terminal')
          setCommandIndex(i)
          setTypedCommand('')
          await typeText(commands[i].command, setTypedCommand, 25)
          if (cancelled) break
          setProgress(commands[i].progress)
          await wait(800)
        }
        if (cancelled) break

        setPhase('code')
        for (let i = 1; i <= generatedLines.length && !cancelled; i += 1) {
          setCodeLines(i)
          await wait(300)
        }
        if (cancelled) break
        setProgress(100)
        await wait(450)
        setPhase('preview')
        await wait(1800)
        setPhase('published')
        await wait(2100)
        if (!cancelled) setCycle((value) => value + 1)
      }
    }

    play()
    return () => {
      cancelled = true
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [cycle])

  const linePrefix = (index) => String(index + 1).padStart(2, '0')

  return (
    <section className="animation-placeholder" aria-label="AI website creation animation">
      <div className="build-demo-window">
        <header className="build-demo-header">
          <div className="build-demo-chrome" aria-hidden="true"><i /><i /><i /></div>
          <div className="build-demo-tab"><Terminal size={13} /> <span>studio / build session</span></div>
          <span className="build-demo-live"><span /> LIVE BUILD</span>
        </header>

        <div className="build-demo-body">
          <div className="build-demo-workspace">
            <div className="build-demo-terminal">
              <div className="build-demo-label"><span>01</span> YOUR PROMPT</div>
              <div className="build-demo-prompt"><span className="build-demo-chevron">›</span><span>{typedPrompt}</span><i className="build-demo-caret" /></div>

              <div className={`build-demo-label build-demo-process-label ${phase !== 'prompt' ? 'is-visible' : ''}`}><span>02</span> BUILD PROCESS</div>
              <div className="build-demo-output">
                {commands.slice(0, Math.max(1, commandIndex + 1)).map((item, index) => {
                  const isCurrent = index === commandIndex && phase === 'terminal'
                  const shownCommand = isCurrent ? typedCommand : item.command
                  return (
                    <div className="build-demo-command-block" key={item.command}>
                      <div className="build-demo-command"><span className="build-demo-chevron">$</span> {shownCommand}</div>
                      {(index < commandIndex || phase === 'code' || phase === 'preview' || phase === 'published') && <div className="build-demo-command-output"><Check size={12} /> {item.output}</div>}
                    </div>
                  )
                })}
                {(phase === 'code' || phase === 'preview' || phase === 'published') && <div className="build-demo-command-output build-demo-ready"><Check size={12} /> Build complete · 3 files generated</div>}
              </div>

              <div className="build-demo-progress-wrap">
                <div className="build-demo-progress-copy"><span>{phase === 'published' ? 'Deployment complete' : phase === 'preview' ? 'Preview ready' : phase === 'code' ? 'Writing components' : 'Building your site'}</span><span>{progress}%</span></div>
                <div className="build-demo-progress-track"><span style={{ width: `${progress}%` }} /></div>
              </div>
            </div>

            <div className="build-demo-code">
              <div className="build-demo-label"><span>03</span> GENERATED CODE <span className="build-demo-file">Hero.jsx</span></div>
              <pre aria-label="Generated React code">{generatedLines.slice(0, codeLines).map((line, index) => (
                <span className="build-demo-code-line" key={line}><i>{linePrefix(index)}</i><code>{line}</code></span>
              ))}<span className="build-demo-code-caret" /></pre>
            </div>
          </div>

          <div className={`build-demo-preview ${phase === 'preview' || phase === 'published' ? 'is-visible' : ''}`}>
            <div className="build-demo-preview-top"><span><Globe2 size={12} /> LIVE PREVIEW</span><span className="build-demo-preview-url">studio.ai/preview</span></div>
            <div className="build-demo-site">
              <div className="build-demo-site-nav"><b><span /> nova</b><span>Work&nbsp;&nbsp;&nbsp; About&nbsp;&nbsp;&nbsp; <em>Get started</em></span></div>
              <div className="build-demo-site-content"><span className="build-demo-site-kicker">THE CREATIVE STUDIO</span><strong>Ideas,<br /><i>made real.</i></strong><p>Turn your next big idea into something extraordinary.</p><span className="build-demo-site-button">Start building <b>+</b></span></div>
              <div className="build-demo-site-orb" />
              <div className="build-demo-site-footer"><span>DESIGNED FOR WHAT'S NEXT</span><span>01 — 04</span></div>
            </div>
            <div className={`build-demo-publish ${phase === 'published' ? 'is-visible' : ''}`}><span><Check size={13} /></span><div><b>Published successfully</b><small>Your site is live at nova.studio</small></div><span className="build-demo-publish-link">OPEN</span></div>
          </div>
        </div>

        <footer className="build-demo-footer"><span><LoaderCircle size={12} className={phase === 'published' ? 'is-done' : ''} /> {phase === 'published' ? 'All systems operational' : 'AI agent is building your website'}</span><span>REACT <i /> VITE <i /> DEPLOY</span></footer>
      </div>
    </section>
  )
}


