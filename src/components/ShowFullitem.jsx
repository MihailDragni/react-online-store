import { useDispatch, useSelector } from 'react-redux'
import { addToOrder } from '../redux/cart-slice'
import { closeModal } from '../redux/modal-slice'

function ShowFullitem() {
  const dispatch = useDispatch()
  const { fullItem } = useSelector((store) => store.modal)

  function onAddHandler() {
    dispatch(addToOrder(fullItem))
  }

  function onCloseModal(event) {
    dispatch(closeModal())
  }

  return (
    <div className="full-item" onClick={onCloseModal}>
      <div
        className="full-item__modal item"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className="item__img"
          src={`./img/${fullItem.img}`}
          alt={fullItem.title}
        />
        <div className="item__body">
          <h2 className="item__title">{fullItem.title}</h2>
          <p className="item__desc">{fullItem.desc}</p>
          <div className="item__row">
            <span className="item__price">${fullItem.price}</span>
            <div className="item__btn add-to-cart" onClick={onAddHandler}>
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowFullitem
