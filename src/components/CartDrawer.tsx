interface CartItemProps {
  product: { name: string; price: number; image: string }
  onRemove: () => void
}

export function CartItem({ product, onRemove }: Omit<CartItemProps, 'item'>) {
  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="cart-item-info">
        <h4>{product.name}</h4>
        <span className="price">{product.price} ₽</span>
        <span className="qty">Кол-во: 1</span>
      </div>
      <button className="cart-remove" onClick={onRemove}>Удалить</button>
    </div>
  )
}

interface CartDrawerProps {
  open: boolean
  onClose: () => void
  items: { id: number }[]
  products: { id: number; name: string; price: number; image: string }[]
  onRemove: (index: number) => void
  total: number
}

export default function CartDrawer({ open, onClose, items, products, onRemove, total }: CartDrawerProps) {
  if (!open) return null

  return (
    <aside className="cart-drawer open">
      <div className="cart-header">
        <h3>Корзина</h3>
        <button className="close-cart" onClick={onClose} aria-label="Закрыть корзину">×</button>
      </div>
      <div className="cart-items">
        {items.length === 0 ? (
          <div style={{ color: 'var(--muted)', textAlign: 'center', padding: '40px 0' }}>Корзина пуста</div>
        ) : (
          items.map((item, i) => {
            const p = products.find(x => x.id === item.id)
            if (!p) return null
            return <CartItem key={i} product={p} onRemove={() => onRemove(i)} />
          })
        )}
      </div>
      <div className="cart-footer">
        <div className="cart-total">
          <span>Итого</span>
          <span>{total} ₽</span>
        </div>
        <button className="btn btn-primary" disabled={items.length === 0}>
          Оформить заказ
        </button>
      </div>
    </aside>
  )
}
