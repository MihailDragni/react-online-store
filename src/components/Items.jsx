import { useSelector } from 'react-redux'
import Item from './Item'
import { useEffect, useState } from 'react'

function Items() {
  const { items } = useSelector((state) => state.items)
  const { activeCategory } = useSelector((state) => state.category)
  const [sortedItems, setSortedItems] = useState(items)

  useEffect(() => {
    if (activeCategory === 'all') {
      setSortedItems(() => [...items])
    } else {
      setSortedItems(() => items.filter((el) => el.category === activeCategory))
    }
    // console.log(sortedItems)
  }, [activeCategory, items])

  return (
    <div className="items">
      <ul className="items__list">
        {sortedItems.map((el) => (
          <Item item={el} key={el.id} />
        ))}
      </ul>
    </div>
  )
}

export default Items
