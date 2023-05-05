import { useDispatch, useSelector } from 'react-redux'
import { addToOrder } from '../redux/cart-slice'

function Item({ item, onShowItem, onAdd }) {
  const dispatch = useDispatch()

  function addItemHandler() {
    dispatch(addToOrder(item))
  }

  return (
    <div className="item">
      <img
        src={`./img/${item.img}`}
        alt={item.title}
        onClick={() => onShowItem(item)}
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
