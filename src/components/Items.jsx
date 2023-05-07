import Item from './Item'

function Items({ items }) {
  return (
    <div className="items">
      <ul className="items__list">
        {items.map((el) => (
          <Item item={el} key={el.id} />
        ))}
      </ul>
    </div>
  )
}

export default Items
