import { FaTrash } from 'react-icons/fa'

function Order({ item, onDelete }) {
  return (
    <div className="item">
      <img src={`./img/${item.img}`} alt={item.title} />
      <div>
        <h2>{item.title}</h2>
        <b>{item.price}$</b>
      </div>
      <FaTrash className="delete-icon" onClick={() => onDelete(item.id)} />
    </div>
  )
}

export default Order
