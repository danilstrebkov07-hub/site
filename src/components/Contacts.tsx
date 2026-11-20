export default function Contacts() {
  return (
    <section id="contacts" className="section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-form">
            <div className="section-title">Напишите нам</div>
            <div className="section-sub">Ответим в течение дня.</div>
            <form>
              <input type="text" placeholder="Имя" required />
              <input type="email" placeholder="Email" required />
              <textarea rows={4} placeholder="Сообщение" required />
              <button type="submit" className="btn btn-primary">Отправить</button>
            </form>
          </div>
          <div className="contact-info">
            <h3>Контакты</h3>
            <p>г. Москва</p>
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
