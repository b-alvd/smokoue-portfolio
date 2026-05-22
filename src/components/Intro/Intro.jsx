import { useEffect, useRef } from 'react'
import styles from './Intro.module.css'

export default function Intro({ onDone }) {
  const leftRef   = useRef(null)
  const rightRef  = useRef(null)
  const avatarRef = useRef(null)

  useEffect(() => {
    const t1 = setTimeout(() => {
      avatarRef.current?.classList.add(styles.avatarVisible)
    }, 200)

    const t2 = setTimeout(() => {
      avatarRef.current?.classList.remove(styles.avatarVisible)
      avatarRef.current?.classList.add(styles.avatarZoom)
    }, 1500)

    const t3 = setTimeout(() => {
      leftRef.current?.classList.add(styles.openLeft)
      rightRef.current?.classList.add(styles.openRight)
    }, 2000)

    const t4 = setTimeout(() => {
      onDone()
    }, 3000)

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [onDone])

  return (
    <div className={styles.wrapper}>
      <div ref={leftRef} className={`${styles.panel} ${styles.panelLeft}`} />
      <div ref={rightRef} className={`${styles.panel} ${styles.panelRight}`} />
      <img
        ref={avatarRef}
        src="/avatar.png"
        alt="Smokoue"
        className={styles.avatar}
        draggable={false}
      />
    </div>
  )
}
