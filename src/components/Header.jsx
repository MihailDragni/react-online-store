import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header className="header">
      <nav className="header__nav">
        <span className="header__logo logo">House Staff</span>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen ? 'active' : ''}`}
        />
        {cartOpen && <div className="shop-cart"></div>}
        <ul className="header__menu menu">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
      </nav>
      <div className="header__presentation"></div>
    </header>
  )
}

export default Header
