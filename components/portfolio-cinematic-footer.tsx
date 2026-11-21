'use client'

import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const sceneVideo = 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/abdab52e-bb1b-477d-ae7c-26c5f8915433.mp4'
const scenePoster = 'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/af6deff1-d678-4dc6-ae24-2880b16cdb20.jpg'

export function CinematicFooter() {
  const footerRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const footer = footerRef.current
    const video = videoRef.current
    if (!footer || !video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const startScene = () => {
      video.currentTime = 0.6
      void video.play().catch(() => undefined)
    }
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      if (video.readyState >= 1) startScene()
      else video.addEventListener('loadedmetadata', startScene, { once: true })
      observer.disconnect()
    }, { threshold: 0.1 })

    observer.observe(footer)
    return () => {
      observer.disconnect()
      video.removeEventListener('loadedmetadata', startScene)
    }
  }, [])

  return <footer ref={footerRef} className="cinema-footer" id="portfolio-finale">
    <video ref={videoRef} className="cinema-scene" muted playsInline preload="metadata" poster={scenePoster} aria-hidden="true">
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
        <div><h2>Explore</h2><a href="#about">The person</a><a href="#interests">What I explore</a><a href="#gallery">Life off-screen</a></div>
        <div><h2>Connect</h2><a href="mailto:lakerleslie3@gmail.com">Email <ArrowUpRight size={13} /></a><a href="https://github.com/nastylex" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a><a href="https://linkedin.com/in/laker-leslie-jordan" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a></div>
      </nav>
      <div className="cinema-brand-row">
        <a className="cinema-wordmark" href="#top" aria-label="Nastylex, back to top">NASTYLEX<span>.</span></a>
        <a className="cinema-top" href="#top">Back to the beginning <ArrowUpRight size={13} /></a>
      </div>
    </div>
  </footer>
}
