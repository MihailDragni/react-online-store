import { useDispatch, useSelector } from 'react-redux'
import { setActiveCategory } from '../redux/category-slice'

function Categories() {
  const dispatch = useDispatch()
  const { categories, activeCategory } = useSelector((state) => state.category)

  return (
    <div className="categories">
      {categories.map((el) => (
        <div
          className={
            activeCategory === el.category
              ? 'categories__item active'
              : 'categories__item'
          }
          key={el.category}
          onClick={() => dispatch(setActiveCategory(el.category))}
        >
          {el.name}
        </div>
      ))}
    </div>
  )
}

export default Categories
