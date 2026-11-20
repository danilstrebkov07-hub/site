export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-scene"></div>
      <div className="hero-product">
        <div className="hero-product-inner">Товар в витрине</div>
      </div>
      <div className="hero-content">
        <h1>Подбор одежды, обуви и аксессуаров</h1>
        <p>Вещи для города, которые подобрать можно за один вечер. Доставка день в день.</p>
        <div className="hero-actions">
          <a href="#catalog" className="btn btn-primary">В каталог</a>
          <a href="#contacts" className="btn btn-outline">Контакты</a>
        </div>
      </div>
    </section>
  )
}
