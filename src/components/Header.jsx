import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order'

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)))
  return (
    <>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">Сумма: {new Intl.NumberFormat().format(summa)}$</p>
    </>
  )
}

const showNothing = () => {
  return (
    <div className="empty">
      <h3>Товаров нет</h3>
    </div>
  )
}

const Header = (props) => {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header className="header">
      <nav className="header__nav">
        <span className="header__logo logo">House Staff</span>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen ? 'active' : ''}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
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
