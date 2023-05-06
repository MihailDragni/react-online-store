import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearOrders, changeCartOpen } from '../redux/cart-slice'

const Header = () => {
  const { orders, totalPrice, cartOpen, counter } = useSelector(
    (state) => state.cart
  )
  const dispatch = useDispatch()

  function onClearOrders() {
    dispatch(clearOrders())
  }

  function onChangeCartHandler() {
    dispatch(changeCartOpen())
  }

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to={'/'} className="header__logo logo">
          House Staff
        </Link>
        <div className="header__cart cart">
          <FaShoppingCart
            onClick={onChangeCartHandler}
            className={`cart__button ${cartOpen ? 'active' : ''}`}
          />
          <span className="cart__counter">{counter}</span>
        </div>

        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? (
              <>
                <div className="shop-cart__wrapper">
                  {orders.map((el) => (
                    <Order key={el.id} item={el} />
                  ))}
                </div>
                <div className="shop-cart__row">
                  <p className="shop-cart__total-price">
                    Сумма: {new Intl.NumberFormat().format(totalPrice)}$
                  </p>
                  <span className="shop-cart__clear" onClick={onClearOrders}>
                    Очистить
                  </span>
                </div>
              </>
            ) : (
              <h3 className="shop-cart__empty">Товаров пока нет</h3>
            )}
          </div>
        )}

        <ul className="header__menu menu">
          <li className="menu__item">
            <NavLink className="menu__link" to={'/about'}>
              О нас
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="menu__link" to={'/contacts'}>
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
