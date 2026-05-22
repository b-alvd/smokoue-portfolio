import styles from './Portfolio.module.css'

const thumbnails = [
  { id: 0,  src: '/minias/1.jpg'  }, { id: 1,  src: '/minias/2.jpg'  }, { id: 2,  src: '/minias/3.jpg'  }, { id: 3,  src: '/minias/4.jpg'  }, { id: 4,  src: '/minias/5.jpg'  },
  { id: 5,  src: '/minias/6.jpg'  }, { id: 6,  src: '/minias/7.jpg'  }, { id: 7,  src: '/minias/8.jpg'  }, { id: 8,  src: '/minias/9.jpg'  }, { id: 9,  src: '/minias/10.jpg' },
  { id: 10, src: '/minias/11.jpg' }, { id: 11, src: '/minias/12.jpg' }, { id: 12, src: '/minias/13.jpg' }, { id: 13, src: '/minias/14.jpg' }, { id: 14, src: '/minias/15.jpg' },
  { id: 15, src: '/minias/16.jpg' }, { id: 16, src: '/minias/17.jpg' }, { id: 17, src: '/minias/18.jpg' }, { id: 18, src: '/minias/19.jpg' }, { id: 19, src: '/minias/20.jpg' },
  { id: 20, src: '/minias/21.jpg' }, { id: 21, src: '/minias/22.jpg' }, { id: 22, src: '/minias/23.jpg' }, { id: 23, src: '/minias/24.jpg' }, { id: 24, src: '/minias/25.jpg' },
]

const PLACEHOLDER_COLORS = [
  '#1a1a2e', '#16213e', '#1a2a1a', '#2e1a1a', '#2a1a2e',
  '#1a2e2a', '#2e2a1a', '#1e1a2e', '#2a1e1a', '#221a2e',
  '#1a2e16', '#2e1a22', '#1e2a1a', '#2a2e1a', '#16201e',
  '#2e1616', '#161e2e', '#2a161e', '#1e2e2a', '#162e1a',
  '#2e2016', '#161a2e', '#2a2016', '#1a162e', '#2e1a16',
]

const rows = [
  { dir: 'left',  duration: '140s', indices: [0,  1,  2,  3,  4]  },
  { dir: 'right', duration: '120s', indices: [5,  6,  7,  8,  9]  },
  { dir: 'left',  duration: '110s', indices: [10, 11, 12, 13, 14] },
  { dir: 'right', duration: '135s', indices: [15, 16, 17, 18, 19] },
  { dir: 'left',  duration: '140s', indices: [20, 21, 22, 23, 24] },
]

export default function Portfolio() {
  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.header}>
        <span className={styles.tag}>— PORTFOLIO</span>
        <h2 className={styles.title}>Mes miniatures</h2>
      </div>

      <div className={styles.rows}>
        {rows.map((row, rowIndex) => {
          const rowThumbs = row.indices.map(i => thumbnails[i])
          const repeated = Array.from({ length: 8 }, () => rowThumbs).flat()

          return (
            <div key={rowIndex} className={styles.track}>
              <div
                className={`${styles.inner} ${styles[row.dir]}`}
                style={{ animationDuration: row.duration }}
              >
                {[...repeated, ...repeated].map((t, i) => (
                  <div
                    key={i}
                    className={styles.thumb}
                    style={!t.src ? { background: PLACEHOLDER_COLORS[t.id] } : undefined}
                  >
                    {t.src
                      ? <img src={t.src} alt={`Miniature ${t.id + 1}`} loading="lazy" />
                      : <span className={styles.thumbLabel}>minia {t.id + 1}</span>
                    }
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
