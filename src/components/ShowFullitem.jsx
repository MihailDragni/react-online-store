import { useDispatch, useSelector } from 'react-redux'
import { addToOrder } from '../redux/cart-slice'
import { closeModal } from '../redux/modal-slice'

function ShowFullitem() {
  const { fullItem } = useSelector((store) => store.modal)
  const dispatch = useDispatch()
  function onAddHandler() {
    dispatch(addToOrder(fullItem))
  }

  function onCloseModal(event) {
    dispatch(closeModal())
  }
  return (
    <div className="full-item" onClick={onCloseModal}>
      <div onClick={(e) => e.stopPropagation()}>
        <img
          src={`./img/${fullItem.img}`}
          alt={fullItem.title}
        />
        <h2>{fullItem.title}</h2>
        <p>{fullItem.desc}</p>
        <b>{fullItem.price}$</b>
        <div className="add-to-cart" onClick={onAddHandler}>
          +
        </div>
      </div>
    </div>
  )
}

export default ShowFullitem
