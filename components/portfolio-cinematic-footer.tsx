'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const sceneVideo = 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/abdab52e-bb1b-477d-ae7c-26c5f8915433.mp4'
const scenePoster = 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/af6deff1-d678-4dc6-ae24-2880b16cdb20.jpg'

export function CinematicFooter() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [online, setOnline] = useState(true)
  const [flight, setFlight] = useState(false)
  const reducedMotion = useRef(false)

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const video = videoRef.current
    if (!video || reducedMotion.current) return
    const start = () => {
      video.currentTime = 0.6
      void video.play().catch(() => undefined)
    }
    if (video.readyState >= 1) start()
    else video.addEventListener('loadedmetadata', start, { once: true })
    return () => video.removeEventListener('loadedmetadata', start)
  }, [])

  const onTimeUpdate = () => {
    const video = videoRef.current
    if (!video) return
    if (online && video.currentTime >= 2.3) {
      video.pause()
      video.currentTime = 2.3
    }
    if (!online && video.currentTime >= 4.72 && !flight) {
      setFlight(true)
      window.setTimeout(() => setFlight(false), 850)
    }
  }

  const togglePower = () => {
    if (reducedMotion.current) {
      setOnline((value) => !value)
      return
    }
    const video = videoRef.current
    if (!video || (!online && !video.paused)) return
    if (online) {
      setOnline(false)
      video.currentTime = 2.3
      void video.play().catch(() => undefined)
    } else {
      setOnline(true)
      setFlight(false)
      video.currentTime = 0.6
      void video.play().catch(() => undefined)
    }
  }

  return <footer className={`cinema-footer${online ? ' is-online' : ' is-offline'}${flight ? ' is-flight' : ''}`} id="portfolio-finale">
    <video ref={videoRef} className="cinema-scene" muted playsInline preload="metadata" poster={scenePoster} onTimeUpdate={onTimeUpdate} aria-hidden="true">
      <source src={sceneVideo} type="video/mp4" />
    </video>
    <div className="cinema-sky-wash" />
    <div className="cinema-grain" />
    <div className="cinema-content">
      <div className="cinema-copy">
        <span className="cinema-eyebrow"><i /> END OF TRANSMISSION · KAMPALA, UGANDA</span>
        <p className="cinema-tagline">Every good story leaves<br />a little light behind.</p>
        <span className="cinema-copyright">© {new Date().getFullYear()} Laker Leslie Jordan. Built with curiosity.</span>
      </div>
      <nav className="cinema-links" aria-label="Footer navigation">
        <div><h2>Explore</h2><a href="#about">The person</a><a href="#interests">What I explore</a><a href="#aerion">AERION</a><a href="#gallery">Life off-screen</a></div>
        <div><h2>Connect</h2><a href="mailto:lakerleslie3@gmail.com">Email <ArrowUpRight size={13} /></a><a href="https://github.com/nastylex" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a><a href="https://linkedin.com/in/laker-leslie-jordan" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a></div>
      </nav>
      <div className="cinema-brand-row">
        <a className="cinema-wordmark" href="#top" aria-label="Nastylex, back to top">NASTYLEX<span>.</span></a>
        <button className="cinema-power" type="button" aria-label={online ? 'Power down the scene' : 'Power up the scene'} aria-pressed={!online} onClick={togglePower}>
          <svg viewBox="0 0 50 62" aria-hidden="true"><path d="M14.2 22.6 A19 19 0 1 0 35.8 22.6" /><path d="M25 6.5 V33" /></svg>
        </button>
        <a className="cinema-top" href="#top">Back to the beginning <ArrowUpRight size={13} /></a>
      </div>
    </div>
    <span className="cinema-flight-dot" aria-hidden="true" />
  </footer>
}
