import { useRef, useState } from 'react'
import styles from './BeforeAfter.module.css'

const pairs = [
  { before: '/a-a/1/avant.jpg', after: '/a-a/1/apres.jpg' },
  { before: '/a-a/2/avant.jpg', after: '/a-a/2/apres.jpg' },
]

function Slider({ pair }) {
  const containerRef = useRef(null)
  const handleRef    = useRef(null)
  const [pos, setPos] = useState(50)

  const applyPos = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const pct  = Math.min(Math.max((clientX - rect.left) / rect.width * 100, 0), 100)
    setPos(pct)
    handleRef.current.style.left = `${pct}%`
  }

  const onStart = (e) => {
    e.preventDefault()
    applyPos(e.touches ? e.touches[0].clientX : e.clientX)
    const onMove = (e) => applyPos(e.touches ? e.touches[0].clientX : e.clientX)
    const onUp = () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onUp)
  }

  return (
    <div ref={containerRef} className={styles.slider}>

      {/* APRÈS — fond complet */}
      <img src={pair.after} alt="Après" draggable={false} className={styles.img} />

      {/* AVANT — même image, clippée à droite via clipPath */}
      <img
        src={pair.before}
        alt="Avant"
        draggable={false}
        className={styles.img}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      <div className={styles.dragZone} onMouseDown={onStart} onTouchStart={onStart} />

      <span className={`${styles.label} ${styles.labelLeft}`}>AVANT</span>
      <span className={`${styles.label} ${styles.labelRight}`}>APRÈS</span>

      <div ref={handleRef} className={styles.handle} style={{ left: `${pos}%` }}>
        <div className={styles.handleBtn}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6,3 2,9 6,15" />
            <polyline points="12,3 16,9 12,15" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section className={styles.section} id="avant-apres">
      <div className={styles.header}>
        <span className={styles.tag}>— AVANT / APRÈS</span>
        <h2 className={styles.title}>La différence que ça fait</h2>
      </div>
      <div className={styles.grid}>
        {pairs.map((pair, i) => (
          <Slider key={i} pair={pair} />
        ))}
      </div>
    </section>
  )
}
