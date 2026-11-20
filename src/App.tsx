import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import './index.css'

const products = [
  { id: 1, name: 'Кроссовки "Арабика"', price: 8900, category: 'Обувь', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop' },
  { id: 2, name: 'Футболка премиум', price: 3500, category: 'Одежда', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop' },
  { id: 3, name: 'Джинсы straight', price: 7200, category: 'Одежда', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop' },
  { id: 4, name: 'Часы минималист', price: 12500, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop' },
  { id: 5, name: 'Рюкзак городской', price: 5600, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop' },
  { id: 6, name: 'Кошелек кожа', price: 4100, category: 'Аксессуары', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop' },
  { id: 7, name: 'Кепка базовая', price: 2200, category: 'Обувь', image: 'https://images.unsplash.com/photo-1585286369039-a6e6e6e6e6e6?w=400&h=400&fit=crop' },
  { id: 8, name: 'Куртка пуховик', price: 15900, category: 'Одежда', image: 'https://images.unsplash.com/photo-1544963251-0bbb3b4f2a1a?w=400&h=400&fit=crop' },
]

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState<{id:number}[]>([])

  const addToCart = (id: number) => {
    setCart(prev => [...prev, { id }])
    setCartOpen(true)
  }

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  const total = cart.reduce((sum, item) => {
    const p = products.find(x => x.id === item.id)
    return sum + (p ? p.price : 0)
  }, 0)

  return (
    <>
      <Header cartCount={cart.length} onCartClick={() => setCartOpen(true)} />
      <Hero />
      <Catalog products={products} onAdd={addToCart} />
      <About />
      <Services />
      <Portfolio />
      <Contacts />
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cart} products={products} onRemove={removeFromCart} total={total} />
    </>
  )
}
