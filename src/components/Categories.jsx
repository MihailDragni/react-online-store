const categories = [
  {
    category: 'all',
    name: 'Всё',
  },
  {
    category: 'chairs',
    name: 'Стулья',
  },
  {
    category: 'tables',
    name: 'Столы',
  },
  {
    category: 'sofa',
    name: 'Диваны',
  },
  {
    category: 'light',
    name: 'Свет',
  },
]

function Categories({ category, setCategory }) {
  return (
    <div className="categories">
      {categories.map((el) => (
        <div
          className={
            category === el.category
              ? 'categories__item active'
              : 'categories__item'
          }
          key={el.category}
          onClick={() => setCategory(el.category)}
        >
          {el.name}
        </div>
      ))}
    </div>
  )
}

export default Categories
