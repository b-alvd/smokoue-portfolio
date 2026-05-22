import styles from './Footer.module.css'

const navLinks = [
  { label: 'Accueil',       id: 'accueil'     },
  { label: 'Clients',       id: 'clients'     },
  { label: 'Portfolio',     id: 'portfolio'   },
  { label: 'Avant / Après', id: 'avant-apres' },
  { label: 'Avis',          id: 'avis'        },
  { label: 'Contact',       id: 'contact'     },
]

const socials = [
  {
    label: 'X',
    href: 'https://x.com/Smokouue',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/smokoue_',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'Mail',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=lacouelea@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.brand}>
          <img src="/avatar.png" alt="Smokoue" className={styles.avatar} />
          <div className={styles.socials}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <nav className={styles.nav}>
          {navLinks.map(l => (
            <button key={l.id} className={styles.link} onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>

      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Smokoue - Tous droits réservés.</span>
        <span className={styles.dev}>
          Site développé par <a href="https://github.com/b-alvd" target="_blank" rel="noopener noreferrer">b_alvd</a>
        </span>
      </div>
    </footer>
  )
}
