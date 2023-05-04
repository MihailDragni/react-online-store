import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
          id: 4,
          title: 'Стул белый',
          img: 'chair-white.jpeg',
          desc: 'Белый стул - стильный и минималистичный элемент интерьера.',
          category: 'chairs',
          price: '49.00',
        },
      ],
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    )
  }
}

export default App
