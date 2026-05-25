import styles from './Testimonials.module.css'

const reviews = [
  {
    stars: 5,
    text: "Un immense merci à Smokoue pour les miniatures YouTube de DOC FX. Elles sont toujours incroyablement bien réalisées, impactantes et ultra pro. Franchement, le rendu est magnifique et ça apporte une vraie identité à la chaîne !!! Merci pour ton talent, ton sérieux et ta créativité !",
    author: 'Doc FX',
    sub: '62.1k abonnés',
    img: '/clients/13.jpg',
  },
  {
    stars: 5,
    text: "Je recommande à 100% , cela fait quelques temps maintenant que je travail avec Smokoue et je suis toujours satisfaite par ses miniatures, Trop trop chaud 🔥",
    author: 'LeZorin',
    sub: '33.1k abonnés',
    img: '/clients/16.jpg',
  },
  {
    stars: 5,
    text: "Super expérience avec Smokoue, il comprend directement ce que je veux et les miniatures sont toujours incroyables !!!",
    author: 'Zakino',
    sub: '1.08M abonnés',
    img: '/clients/4.jpg',
  },
  // {
  //   stars: 5,
  //   text: "Mon CTR a explosé grâce à Smokoue. Les gens cliquent par curiosité médicale maintenant. Franchement impressionnant de réussir à rendre une chaîne YouTube aussi agressive visuellement en si peu de temps.",
  //   author: 'LeZorin',
  //   sub: '33.1k abonnés',
  //   img: '/clients/16.jpg',
  // },
]

function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? styles.starOn : styles.starOff}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className={styles.section} id="avis">
      <div className={styles.header}>
        <span className={styles.tag}>— TÉMOIGNAGES</span>
        <h2 className={styles.title}>Ce qu'ils en disent</h2>
      </div>
      <div className={styles.grid}>
        {reviews.map((r, i) => (
          <div key={i} className={styles.card}>
            <Stars count={r.stars} />
            <p className={styles.text}>"{r.text}"</p>
            <div className={styles.author}>
              <div className={styles.avatar}>
                {r.img
                  ? <img src={r.img} alt={r.author} />
                  : null
                }
              </div>
              <div>
                <p className={styles.name}>{r.author}</p>
                <p className={styles.subs}>{r.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
