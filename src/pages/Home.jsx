import React, { useEffect, useState } from 'react'
import Items from '../components/Items'
import Categories from '../components/Categories'
import ShowFullitem from '../components/ShowFullItem'
import { useSelector } from 'react-redux'
import Presentation from '../components/Presentation'

function Home() {
  const [items, setItems] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')

  const { isOpen } = useSelector((state) => state.modal)

  useEffect(() => {
    fetch(
      `https://63289a38cc4c264fdedeab9b.mockapi.io/api/v1/items?${
        activeCategory === 'all' ? '' : `category=${activeCategory}`
      }`
    )
      .then((res) => res.json())
      .then((items) => {
        setItems(items)
      })
  }, [activeCategory])

  return (
    <>
      <Presentation />
      <Categories category={activeCategory} setCategory={setActiveCategory} />

      <Items items={items} />
      {isOpen && <ShowFullitem />}
    </>
  )
}

export default Home
