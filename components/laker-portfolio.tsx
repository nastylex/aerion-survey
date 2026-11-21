'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowUpRight, Code2, Globe2, Mail, Menu, Network, Orbit, Shield, X as CloseIcon } from 'lucide-react'

const portrait = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullSizeRender-4xwsPgC4BMeFpvMcxjLfiQY4NttHjP.jpeg'
const outdoors = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0335-6P20lD6w242Ow9IFPV7izYj3ZvVDm1.jpeg'
const selfie = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1144-XlfT0ZU0wcrODo3SAOuOqwAHmwYjXT.jpeg'
const formal = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/887a0ea8-6eba-4733-b9d3-d033008ebf9e-Vd1fkavp7Sb6QnonWH0P5EyxCslgsr.jpeg'
const skills = [
  { icon: Code2, number: '01', title: 'Software engineering', text: 'Building thoughtful digital experiences, from the first line of code to the final detail.' },
  { icon: Shield, number: '02', title: 'Cybersecurity', text: 'Curiosity for how systems work, where they are vulnerable, and how to make them safer.' },
  { icon: Network, number: '03', title: 'Networks & Linux', text: 'Exploring the infrastructure and open systems that keep the connected world moving.' },
  { icon: Orbit, number: '04', title: 'AI & aerospace', text: 'Looking up and ahead: intelligent systems, ambitious ideas, and the future of flight.' },
]
const social = [
  { label: 'GitHub', value: 'nastylex', href: 'https://github.com/nastylex', icon: Code2 },
  { label: 'X / Twitter', value: '@lakerleslie3', href: 'https://x.com/lakerleslie3', icon: Globe2 },
  { label: 'Instagram', value: '@lesli_e_16', href: 'https://instagram.com/lesli_e_16', icon: Globe2 },
  { label: 'LinkedIn', value: 'Laker Leslie Jordan', href: 'https://linkedin.com/in/laker-leslie-jordan', icon: Globe2 },
  { label: 'Snapchat', value: '@leslie_X', href: 'https://www.snapchat.com/add/leslie_X', icon: Globe2 },
]

export function LakerPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <main className="portfolio" id="top">
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Nastylex home"><span className="wordmark-mark">N</span><span>NASTYLEX<span className="wordmark-dot">.</span></span></a>
      <button className="menu-toggle glass-icon" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <CloseIcon size={19} /> : <Menu size={19} />}</button>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
        {[['About', '#about'], ['Interests', '#interests'], ['AERION', '#aerion'], ['Gallery', '#gallery']].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s connect <ArrowUpRight size={14} /></a>
      </nav>
    </header>

    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="availability"><span className="status-pulse" /> UGANDAN DEVELOPER & TECHNOLOGY ENTHUSIAST</div>
        <p className="hero-prelude">Hello, world. I&apos;m</p>
        <h1 id="hero-title">Laker Leslie<br /><span>Jordan.</span></h1>
        <p className="hero-alias">Known online as <strong>Nastylex</strong> <span className="alias-rule" /> AERION Developer & Founder</p>
        <p className="hero-description">I&apos;m a curious mind building toward a more connected future — exploring software, digital infrastructure, and the technologies that take us further.</p>
        <div className="hero-actions"><a className="button-glass button-bright" href="#about">A little about me <ArrowDownRight size={17} /></a><a className="text-action" href="mailto:lakerleslie3@gmail.com">Get in touch <ArrowUpRight size={15} /></a></div>
        <div className="hero-meta"><span><span className="tiny-spark">✳</span> Based in Uganda</span><span className="meta-separator" /><span>Currently in S4</span></div>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame glass-panel"><Image src={portrait} alt="Laker Leslie Jordan in a dark suit" fill priority sizes="(max-width: 760px) 82vw, 440px" className="hero-portrait" unoptimized /><div className="portrait-shade" /><div className="portrait-caption"><span><i /> A LITTLE ABOUT ME</span><strong>Curious by nature.<br />Building by choice.</strong></div><div className="portrait-index">KLA <span>·</span> 00° 20&apos; N</div></div>
        <div className="floating-chip chip-location"><span className="chip-dot" /><span><b>Kampala, Uganda</b><small>East Africa · EAT</small></span></div>
        <div className="floating-chip chip-orbit"><Orbit size={17} /><span>Always exploring</span></div>
        <div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><span className="hero-star star-one">✳</span><span className="hero-star star-two">✳</span>
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
    </section>

    <section className="intro-section section-wrap" id="about">
      <div className="section-index"><span>01</span> THE PERSON BEHIND THE CODE</div>
      <div className="intro-grid"><div><h2>A student today.<br /><span>A builder for what&apos;s next.</span></h2></div><div className="intro-copy"><p>I&apos;m Laker Leslie Jordan — a Ugandan software developer in the making, technology enthusiast, and the person behind <strong>Nastylex</strong>. I&apos;m drawn to the systems beneath the screen as much as the experiences on it.</p><p>Right now, I&apos;m pursuing my secondary education at <strong>Naalya Secondary School, Bweyogerere Campus</strong>, in Senior Four. Every project, experiment, and question is part of a bigger journey: learning how to build technology that matters.</p><a className="inline-link" href="mailto:lakerleslie3@gmail.com">More conversations, fewer introductions <ArrowUpRight size={15} /></a></div></div>
      <div className="fact-row"><div><span>BASED IN</span><strong>Uganda <span className="flag-dot">●</span></strong></div><div><span>EDUCATION</span><strong>Naalya Secondary School</strong></div><div><span>LEVEL</span><strong>Senior Four · S4</strong></div><div><span>ONLINE AS</span><strong>@Nastylex</strong></div></div>
    </section>

    <section className="interests-section" id="interests"><div className="section-wrap"><div className="section-index"><span>02</span> THE THINGS THAT KEEP ME CURIOUS</div><div className="interests-heading"><h2>Many rabbit holes.<br /><span>One curious mind.</span></h2><p>From writing code to understanding the networks and machines around it, I love seeing how technology fits together.</p></div><div className="interest-grid">{skills.map(({ icon: Icon, number, title, text }) => <article className="interest-card glass-panel" key={title}><div className="interest-top"><span className="interest-icon"><Icon size={20} strokeWidth={1.6} /></span><span className="interest-num">{number}</span></div><h3>{title}</h3><p>{text}</p><span className="card-glint" /></article>)}</div></div></section>

    <section className="aerion-section section-wrap" id="aerion"><div className="section-index"><span>03</span> A BIGGER IDEA</div><div className="aerion-card glass-panel"><div className="aerion-copy"><span className="aerion-kicker"><span className="status-pulse" /> MY ORGANISATION</span><h2>Meet <span>AERION.</span></h2><p>AERION is where my curiosity turns into ambition. An organisation for developing innovative technology solutions — with a vision that reaches across software, digital infrastructure, and aerospace.</p><a className="button-glass" href="mailto:airspacedevtools@proton.me">Say hello to AERION <ArrowUpRight size={16} /></a></div><div className="aerion-mark-wrap"><div className="mark-halo" /><div className="aerion-mark"><span className="mark-arc" /><span className="mark-a">A</span><span className="mark-star">✦</span></div><span className="mark-caption">AERION · BUILT TO REACH FURTHER</span></div><span className="aerion-watermark">AERION</span></div></section>

    <section className="gallery-section section-wrap" id="gallery"><div className="section-index"><span>04</span> OFF THE SCREEN</div><div className="gallery-heading"><h2>A few frames<br /><span>from my world.</span></h2><p>Life is more than lines of code. Here are a few moments, exactly as they happened.</p></div><div className="photo-grid"><figure className="photo-card photo-large"><Image src={outdoors} alt="Laker enjoying an outdoor day in Uganda" fill sizes="(max-width: 700px) 90vw, 54vw" unoptimized /><figcaption>A little fresh air, a lot of perspective.</figcaption></figure><figure className="photo-card photo-small"><Image src={selfie} alt="Laker smiling in his school sports uniform" fill sizes="(max-width: 700px) 44vw, 23vw" unoptimized /><figcaption>School days, still dreaming big.</figcaption></figure><figure className="photo-card photo-group"><Image src={formal} alt="Laker with friends at a celebration" fill sizes="(max-width: 700px) 44vw, 23vw" unoptimized /><figcaption>Good people. Good memories.</figcaption></figure></div></section>

    <section className="contact-section" id="contact"><div className="section-wrap"><div className="section-index"><span>05</span> THE BEST THINGS START WITH A HELLO</div><div className="contact-heading"><div><p className="contact-kicker">Have an idea, question, or just love tech?</p><h2>Let&apos;s make<br /><span>something matter.</span></h2></div><a className="contact-orb" href="mailto:lakerleslie3@gmail.com" aria-label="Email Laker"><ArrowUpRight size={26} /></a></div><div className="contact-bottom"><a className="email-link" href="mailto:lakerleslie3@gmail.com"><Mail size={17} /> lakerleslie3@gmail.com <ArrowUpRight size={14} /></a><div className="social-grid">{social.map(({ label, value, href, icon: Icon }) => <a href={href} key={label} target="_blank" rel="noreferrer"><Icon size={16} /><span><small>{label}</small><strong>{value}</strong></span><ArrowUpRight className="social-arrow" size={14} /></a>)}</div></div></div></section>

    <footer className="site-footer"><a className="wordmark footer-mark" href="#top"><span className="wordmark-mark">N</span><span>NASTYLEX<span className="wordmark-dot">.</span></span></a><span className="footer-note">Made with curiosity in Uganda <span>✳</span> © {new Date().getFullYear()} Laker Leslie Jordan</span><a className="back-top" href="#top">Back to top <ArrowUpRight size={13} /></a></footer>
  </main>
}
