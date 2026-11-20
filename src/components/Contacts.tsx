export default function Contacts() {
  return (
    <section id="contacts" className="section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-form">
            <div className="section-title">Обратная связь</div>
            <div className="section-sub">Напишите нам, и мы ответим в ближайшее время.</div>
            <form>
              <input type="text" placeholder="Имя" required />
              <input type="email" placeholder="Email" required />
              <textarea rows={4} placeholder="Сообщение" required />
              <input type="hidden" />
              <button type="submit" className="btn btn-primary">Отправить</button>
            </form>
          </div>
          <div className="contact-info">
            <h3>Контакты</h3>
            <p>г. Москва, Beispiel Street 12</p>
            <p>+7 (999) 000-00-00</p>
            <p>shop@example.com</p>
            <div className="social">
              <a href="#">vk</a>
              <a href="#">tg</a>
              <a href="#">wb</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
