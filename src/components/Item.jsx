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
    <li className="items__item item">
      <img
        className="item__img"
        src={`./img/${item.img}`}
        alt={item.title}
        onClick={onShowModalHandler}
      />
      <div className="item__body">
        <h2 className="item__title">{item.title}</h2>
        <p className="item__desc">{item.desc}</p>
        <div className="item__row">
          <span className="item__price">${item.price}</span>
          <div className="item__btn add-to-cart" onClick={addItemHandler}>
            +
          </div>
        </div>
      </div>
    </li>
  )
}

export default Item
