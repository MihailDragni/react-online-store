import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { deleteOrder } from '../redux/cart-slice'

function Order({ item }) {
  const dispatch = useDispatch()
  function onDeleteHandler() {
    dispatch(deleteOrder(item))
  }
  return (
    <div className="shop-cart__item order">
      <div className="order__img">
        <img src={`./img/${item.img}`} alt={item.title} />
      </div>
      <div className="order__column">
        <h2 className="order__title">{item.title}</h2>
        <span className="order__price">{item.price}$</span>
      </div>
      <FaTrash className="order__delete" onClick={onDeleteHandler} />
    </div>
  )
}

export default Order
