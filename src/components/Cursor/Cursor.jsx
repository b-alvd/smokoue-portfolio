import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX  = mouseX
    let ringY  = mouseY
    let animId

    const lerp = (a, b, t) => a + (b - a) * t

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`
        dotRef.current.style.top  = `${mouseY}px`
      }
    }

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.1)
      ringY = lerp(ringY, mouseY, 0.1)
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top  = `${ringY}px`
      }
      animId = requestAnimationFrame(animate)
    }

    const onMouseOver = (e) => {
      const target = e.target.closest('a, button')
      
      if (target) {
        ringRef.current?.classList.add(styles.ringHover)
        dotRef.current?.classList.add(styles.dotHover)
      } else {
        ringRef.current?.classList.remove(styles.ringHover)
        dotRef.current?.classList.remove(styles.dotHover)
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onMouseOver)
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onMouseOver)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className={styles.dot}  />
      <div ref={ringRef} className={styles.ring} />
    </>
  )
}
