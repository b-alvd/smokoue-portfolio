import styles from './ClientsScroll.module.css'

const clients = [
  { id: 0,  name: 'CYRILmp4',           subs: '5.22M',  img: '/clients/1.jpg' },
  { id: 1,  name: 'Benoit Chevalier',    subs: '2.76M',  img: '/clients/2.jpg' },
  { id: 2,  name: 'Thibault Garcia',     subs: '1.16M',  img: '/clients/3.jpg' },
  { id: 3,  name: 'Zakino',              subs: '1.08M',  img: '/clients/4.jpg' },
  { id: 4,  name: 'Jahan Tea',           subs: '741k',   img: '/clients/5.jpg' },
  { id: 5,  name: 'GDB',                 subs: '298k',   img: '/clients/6.jpg' },
  { id: 6,  name: 'Military Machine FR', subs: '296k',   img: '/clients/7.jpg' },
  { id: 7,  name: 'Olivia Gayat',        subs: '141k',   img: '/clients/8.jpg' },
  { id: 8,  name: 'Riskintel Media',     subs: '129k',   img: '/clients/9.jpg' },
  { id: 9,  name: 'Erwan TGD',           subs: '127k',   img: '/clients/10.jpg' },
  { id: 10, name: 'Amah Gauche',         subs: '80.4k',  img: '/clients/11.jpg' },
  { id: 11, name: 'Kailon',              subs: '73.9k',  img: '/clients/12.jpg' },
  { id: 12, name: 'Doc FX',              subs: '62.1k',  img: '/clients/13.jpg' },
  { id: 13, name: 'Haneia',              subs: '44k',    img: '/clients/14.jpg' },
  { id: 14, name: 'Davy Auto',           subs: '41.3k',  img: '/clients/15.jpg' },
  { id: 15, name: 'LeZorin',             subs: '33.1k',  img: '/clients/16.jpg' },
  { id: 16, name: 'Alexandre Gigow',     subs: '22k',    img: '/clients/17.jpg' },
]

const PLACEHOLDER_COLORS = [
  '#7c1d1d', '#1d3a7c', '#1d7c4a', '#6b1d7c', '#7c4a1d',
  '#1d6b7c', '#7c1d55', '#3a7c1d', '#7c5a1d', '#1d4a7c',
  '#5a1d7c', '#1d7c6b', '#7c2a1d', '#1d7c3a', '#4a1d7c',
  '#7c1d4a', '#2a7c1d',
]

const repeated = Array.from({ length: 4 }, () => clients).flat()

export default function ClientsScroll() {
  return (
    <section className={styles.section} id="clients">
      <p className={styles.label}>CRÉATEURS AVEC QUI J'AI COLLABORÉ</p>
      <div className={styles.track}>
        <div className={styles.inner}>
          {[...repeated, ...repeated].map((c, i) => (
            <div key={i} className={styles.card}>
              <div
                className={styles.avatar}
                style={!c.img ? { background: PLACEHOLDER_COLORS[c.id] } : undefined}
              >
                {c.img && <img src={c.img} alt={c.name} />}
              </div>
              <span className={styles.name}>{c.name}</span>
              <span className={styles.subs}>{c.subs} abonnés</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
