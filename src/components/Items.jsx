import Item from './Item'

function Items({ items, onShowItem, onAdd }) {
  return (
    <main>
      {items.map((el) => (
        <Item onShowItem={onShowItem} item={el} key={el.id} onAdd={onAdd} />
      ))}
    </main>
  )
}

export default Items
