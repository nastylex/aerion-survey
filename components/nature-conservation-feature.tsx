import Image from 'next/image'
import { ArrowDownRight, ArrowUpRight, Leaf } from 'lucide-react'

const commitments = [
  { number: '01', title: 'Protect what remains', text: 'Healthy habitats give wildlife and communities room to thrive.' },
  { number: '02', title: 'Restore what we can', text: 'Small acts of care can help damaged places find their way back.' },
  { number: '03', title: 'Keep learning', text: 'Curiosity is where a deeper connection to the natural world begins.' },
]

export function NatureConservationFeature() {
  return <section className="nature-feature" id="nature" aria-labelledby="nature-title">
    <div className="nature-feature-inner">
      <div className="section-index nature-index"><span>05</span> NATURE & CONSERVATION</div>
      <div className="nature-feature-heading">
        <p className="nature-kicker"><Leaf size={14} strokeWidth={1.6} /> A PERSONAL COMMITMENT TO THE LIVING WORLD</p>
        <h2 id="nature-title">If you love nature,<br /><span>you&apos;ll love this.</span></h2>
        <p className="nature-intro">The places that make us feel most alive deserve our care. I&apos;m drawn to the work of protecting wild spaces, restoring balance, and making room for the next generation to experience nature, too.</p>
      </div>
      <div className="nature-landscape">
        <Image src="/images/nature-conservation.png" alt="Mist rising over a green Ugandan rainforest and wetland at sunrise" fill sizes="(max-width: 760px) 92vw, 86vw" className="nature-landscape-image" />
        <div className="nature-landscape-shade" />
        <div className="nature-image-caption"><span>OUR HOME, WORTH PROTECTING</span><span>UGANDA · EAST AFRICA</span></div>
        <div className="nature-image-copy"><span>CARE FOR THE WILD</span><p>Conservation starts<br />with paying attention.</p></div>
      </div>
      <div className="nature-bottom">
        <div className="nature-bottom-copy"><span className="nature-bottom-label">A PLACE FOR PURPOSEFUL IDEAS</span><p>Not a finished project. A direction I care about—and a future worth building toward.</p><a href="mailto:lakerleslie3@gmail.com?subject=Nature%20and%20conservation">Let&apos;s talk about conservation <ArrowUpRight size={15} /></a></div>
        <div className="nature-commitments">{commitments.map((item) => <article className="nature-commitment" key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowDownRight size={15} aria-hidden="true" /></article>)}</div>
      </div>
    </div>
  </section>
}
