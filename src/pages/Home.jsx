import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Items from '../components/Items'
import Categories from '../components/Categories'
import ShowFullitem from '../components/ShowFullItem'
import { useSelector } from 'react-redux'
import Presentation from '../components/Presentation'

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
  const { isOpen } = useSelector((state) => state.modal)

  useEffect(() => {
    setCurrentItems([...items])
  }, [items])

  function chooseCategory(category) {
    if (category === 'all') {
      setCurrentItems([...items])
      return
    }
    setCurrentItems(items.filter((el) => el.category === category))
  }

  return (
    <>
      <Presentation />
      <Categories chooseCategory={chooseCategory} />
      <Items items={currentItems} />
      {isOpen && <ShowFullitem />}
      <Footer />
    </>
  )
}

export default Home
