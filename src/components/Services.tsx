const services = [
  { title: 'Доставка по городу', desc: 'Быстрая доставка курьером в день заказа.' },
  { title: 'Гарантия качества', desc: 'Все товары проходят проверку перед отправкой.' },
  { title: 'Возврат в течение 14 дней', desc: 'Можно вернуть товар, если он не подошёл.' },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-title">Наши услуги</div>
        <div className="section-sub">Что мы предлагаем нашим клиентам.</div>
        <div className="services-grid">
          {services.map(s => (
            <div key={s.title} className="service-card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
