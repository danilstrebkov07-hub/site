import { CartBadge } from './CartBadge'

interface HeaderProps {
  cartCount: number
  onCartClick: () => void
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const links = [
    { to: '/', label: 'Главная' },
    { to: '/about', label: 'О компании' },
    { to: '/services', label: 'Услуги' },
    { to: '/portfolio', label: 'Портфолио' },
    { to: '/contacts', label: 'Контакты' },
  ]

  return (
    <nav className="nav">
      <div className="nav-inner container">
        <a href="/" className="logo">
          SH<span style={{ color: 'var(--text)' }}>OP</span>
        </a>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.to} href={l.to}>
              {l.label}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <CartBadge count={cartCount} onClick={onCartClick} />
        </div>
      </div>
    </nav>
  )
}
