import Item from './Item'

function Items({ items }) {
  return (
    <main>
      {items.map((el) => (
        <Item  item={el} key={el.id} />
      ))}
    </main>
  )
}

export default Items
