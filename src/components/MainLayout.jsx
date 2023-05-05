import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  )
}

export default MainLayout
