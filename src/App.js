import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
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
          category: 'armchair',
          price: '249.00',
        },
        {
          id: 7,
          title: 'Стол для работы',
          img: 'Work-table.jpg',
          desc: 'Прочный, удобный, просторный стол для эффективной работы дома или офиса.',
          category: 'table',
          price: '349.00',
        },
      ],
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true
      }
    })
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] })
    }
  }
}

export default App
