import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { deleteOrder } from '../redux/cart-slice'

function Order({ item }) {
  const dispatch = useDispatch()
  function onDeleteHandler() {
    dispatch(deleteOrder(item))
  }
  return (
    <div className="item">
      <img src={`./img/${item.img}`} alt={item.title} />
      <div>
        <h2>{item.title}</h2>
        <b>{item.price}$</b>
      </div>
      <FaTrash className="delete-icon" onClick={onDeleteHandler} />
    </div>
  )
}

export default Order
