interface CartBadgeProps {
  count: number
  onClick: () => void
}

export function CartBadge({ count, onClick }: CartBadgeProps) {
  return (
    <button className="cart-badge" onClick={onClick} aria-label="Корзина">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
      {count > 0 && <span className="badge">{count}</span>}
    </button>
  )
}
