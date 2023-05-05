import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearOrders, changeCartOpen } from '../redux/cart-slice'

const Header = () => {
  const { orders, totalPrice, cartOpen } = useSelector((state) => state.cart)
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

        <FaShoppingCart
          onClick={onChangeCartHandler}
          className={`shop-cart-button ${cartOpen ? 'active' : ''}`}
        />
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
                  <p className="summa">
                    Сумма: {new Intl.NumberFormat().format(totalPrice)}$
                  </p>
                  <span onClick={onClearOrders}>Очистить</span>
                </div>
              </>
            ) : (
              <div className="empty">
                <h3>Товаров пока нет</h3>
              </div>
            )}
          </div>
        )}
        <ul className="header__menu menu">
          <li>
            <NavLink to={'/about'}>О нас</NavLink>
          </li>
          <li>
            <NavLink to={'/contacts'}>Контакты</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
