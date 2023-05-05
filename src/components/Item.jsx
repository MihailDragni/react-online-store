import { useDispatch } from 'react-redux'
import { addToOrder } from '../redux/cart-slice'
import { onShowModal } from '../redux/modal-slice'

function Item({ item }) {
  const dispatch = useDispatch()

  function addItemHandler() {
    dispatch(addToOrder(item))
  }

  function onShowModalHandler() {
    dispatch(onShowModal(item))
  }

  return (
    <div className="item">
      <img
        src={`./img/${item.img}`}
        alt={item.title}
        onClick={onShowModalHandler}
      />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}$</b>
      <div className="add-to-cart" onClick={addItemHandler}>
        +
      </div>
    </div>
  )
}

export default Item
