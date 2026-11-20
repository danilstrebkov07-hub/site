import { useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  category: string
  image: string
  desc: string
}

interface CatalogProps {
  products: Product[]
  onAdd: (id: number) => void
}

export default function Catalog({ products, onAdd }: CatalogProps) {
  const [filter, setFilter] = useState('Все')
  const categories = ['Все', ...new Set(products.map(p => p.category))]
  const filtered = filter === 'Все' ? products : products.filter(p => p.category === filter)

  return (
    <section id="catalog" className="section">
      <div className="container">
        <div className="section-title">Каталог товаров</div>
        <div className="section-sub">Выбирайте по категориям и добавляйте в корзину.</div>
        <div className="filter-bar">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="product-grid">
          {filtered.map(p => (
            <div key={p.id} className="product-card">
              <div className="product-img">
                <img src={p.image} alt={p.name} />
              </div>
              <div className="product-info">
                <div className="category">{p.category}</div>
                <h3>{p.name}</h3>
                <span className="price">{p.price} ₽</span>
                <button className="add-btn" onClick={() => onAdd(p.id)}>
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
