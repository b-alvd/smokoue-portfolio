import { useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Accueil',       id: 'accueil'     },
  { label: 'Clients',       id: 'clients'     },
  { label: 'Portfolio',     id: 'portfolio'   },
  { label: 'Avant / Après', id: 'avant-apres' },
  { label: 'Avis',          id: 'avis'        },
  { label: 'Contact',       id: 'contact'     },
]

function scrollTo(id, close) {
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' })
  close()
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <nav className={styles.nav}>
        <button onClick={() => scrollTo('accueil', close)} className={styles.logo}>
          MINIAMAKER
        </button>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.id}>
              <button className={styles.link} onClick={() => scrollTo(l.id, close)}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <ul className={styles.drawerLinks}>
          {links.map(l => (
            <li key={l.id}>
              <button className={styles.drawerLink} onClick={() => scrollTo(l.id, close)}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {open && <div className={styles.overlay} onClick={close} />}
    </>
  )
}
