const portfolio = [
  { title: 'Летняя коллекция', desc: 'Новая линия одежды для тёплого сезона.' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-title">Наши работы</div>
        <div className="section-sub">Одна коллекция, собранная вひとつ.</div>
        <div className="portfolio-grid">
          {portfolio.map(p => (
            <div key={p.title} className="portfolio-item">
              <div className="portfolio-img"></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
