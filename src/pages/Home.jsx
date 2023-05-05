import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Items from '../components/Items'
import Categories from '../components/Categories'
import ShowFullitem from '../components/ShowFullitem'

function Home() {
  const [currentItems, setCurrentItems] = useState([])
  const [items] = useState([
    {
      id: 1,
      title: 'Стул серый',
      img: 'chair-grey.jpeg',
      desc: 'Серый стул - простой и элегантный предмет мебели комнаты.',
      category: 'chairs',
      price: '49.99',
    },
    {
      id: 2,
      title: 'Стол',
      img: 'table.webp',
      desc: 'Эргономичный стол обеспечивает комфорт при работе в течение дня.',
      category: 'tables',
      price: '149.00',
    },
    {
      id: 3,
      title: 'Диван',
      img: 'sofa.jpeg',
      desc: 'Расслабьтесь на удобном диване в любое время дня!',
      category: 'sofa',
      price: '549.00',
    },
    {
      id: 4,
      title: 'Лампа',
      img: 'wall-light.jpeg',
      desc: 'Новая эргономичная лампа - удобство и комфорт для глаз',
      category: 'light',
      price: '25.00',
    },
    {
      id: 5,
      title: 'Стул белый',
      img: 'chair-white.jpeg',
      desc: 'Белый стул - стильный и минималистичный элемент интерьера.',
      category: 'chairs',
      price: '49.00',
    },
    {
      id: 6,
      title: 'Кресло',
      img: 'Armchair.jpg',
      desc: 'Мягкое кресло - уютное место для отдыха и релакса.',
      category: 'chairs',
      price: '249.00',
    },
    {
      id: 7,
      title: 'Стол для работы',
      img: 'Work-table.jpg',
      desc: 'Прочный, удобный, просторный стол для эффективной работы дома или офиса.',
      category: 'tables',
      price: '349.00',
    },
  ])
  const [showFullItem, setShowFullItem] = useState(false)
  const [fullItem, setFullItem] = useState({})

  useEffect(() => {
    setCurrentItems([...items])
  }, [items])

  function onShowItem(item) {
    setFullItem([...item])
    setShowFullItem(!showFullItem)
  }

  function chooseCategory(category) {
    if (category === 'all') {
      setCurrentItems([...items])
      return
    }
    setCurrentItems(items.filter((el) => el.category === category))
  }


  return (
    <div className="wrapper">
      <Header />
      <Categories chooseCategory={chooseCategory} />
      <Items
        onShowItem={onShowItem}
        items={currentItems}
      />
      {showFullItem && (
        <ShowFullitem
          onShowItem={onShowItem}
          item={fullItem}
        />
      )}
      <Footer />
    </div>
  )
}

export default Home
