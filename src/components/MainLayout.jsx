import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <>
      <div className="content">
        <div className="container">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MainLayout
