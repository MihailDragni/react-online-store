import React, { useEffect, useState } from 'react'
import Items from '../components/Items'
import Categories from '../components/Categories'
import ShowFullitem from '../components/ShowFullItem'
import { useDispatch, useSelector } from 'react-redux'
import Presentation from '../components/Presentation'
import { fetchCategories } from '../redux/category-slice'
import { fetchItems } from '../redux/items-slice'

function Home() {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state) => state.modal)

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/MihailDragni/react-online-store/main/db.json'
    )
      .then((res) => res.json())
      .then((items) => {
        dispatch(fetchItems(items.items))
        dispatch(fetchCategories(items.categories))
      })
  }, [])

  return (
    <>
      <Presentation />
      <Categories />
      <Items />
      {isOpen && <ShowFullitem />}
    </>
  )
}

export default Home
