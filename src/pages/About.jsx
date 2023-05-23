import React from 'react'
import Home1 from '../assets/img/home1.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="about__desc desc-about">
          <h1 className="about__title title">О нас</h1>
          <div className="desc-about__text">
            <p>Мы помогаем создавать уютные и комфортные дома!</p>
            <p>
              “House Staff”. имеет более 10 лет работает на рынке оборудования и
              мебели для дома в Молдове.
            </p>
            <p>
              Наш ассортимент, официально сертифицирован и лицензирован на всей
              территории нашей страны.
            </p>
            <p>
              У нас вы найдете только качественную мебель и материалы из лучших
              мировых брендов, которые помогут создать уютный и комфортный
              интерьер вашего дома.
            </p>
          </div>
          <div className="desc-about__items">
            <span>Ассортимент нашего магазина включает в себя:</span>
            <ul className="desc-about__list">
              <li className="desc-about__item">
                <p>
                  Кровати, диваны и кресла различных размеров и стилей для
                  спальни и гостиной.
                </p>
              </li>
              <li className="desc-about__item">
                <p>
                  Шкафы, комоды, полки и другие виды хранения для организации
                  пространства в доме.
                </p>
              </li>
              <li className="desc-about__item">
                <p>Столы, стулья и другая мебель для кухни и столовой.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="about__img">
          <img src={Home1} alt="" />
        </div>
      </div>

      <div className="about__products our-products">
        <h2 className="our-products__title title">Наши продукты</h2>
        <ul className="our-products__list">
          <li className="our-products__item ">
            <img src={'./img/chair-grey.jpeg'} alt="" />
          </li>
          <li className="our-products__item ">
            <img src={'./img/Work-table.jpg'} alt="" />
          </li>
          <li className="our-products__item">
            <img src={'./img/wall-light.jpeg'} alt="" />
          </li>
          <li className="our-products__item ">
            <img src={'./img/sofa.jpeg'} alt="" />
          </li>
          <li className="our-products__item ">
            <img src={'./img/table.webp'} alt="" />
          </li>
          <li className="our-products__item ">
            <img src={'./img/Armchair.jpg'} alt="" />
          </li>
        </ul>
      </div>

      <div className="about__text">
        <h2 className="about__title title">Наши рекомендации</h2>
        <p>
          При выборе мебели для дома, необходимо обратить внимание на качество,
          комфорт и функциональность. Из всех предметов мебели, диван является
          самым важным, так как это основное место для отдыха и релаксации в
          доме. Выбирайте диваны с удобными мягкими подушками, качественными
          материалами обивки и прочной конструкцией.
        </p>
        <p>
          Если вы ищете удобное кресло для чтения и отдыха, обратите внимание на
          мягкие кресла с прочным скелетом, удобной спинкой и подлокотниками.
          Эти кресла хорошо будут гармонировать с вашим диваном и создадут
          уютный уголок отдыха.
        </p>
        <p>
          В выборе удобных стульев и столов для вашей гостиной и кухни, уделите
          внимание дизайну и функциональности. Выбирайте стулья с удобными
          подлокотниками и мягкими сидениями. Столы же должны быть прочными,
          удобными в использовании, а главное, соответствовать дизайну вашей
          комнаты.
        </p>
        <p>
          Найти лучшие товары для вашего дома не так уж и сложно, если вы
          знаете, на что обратить внимание. В нашем магазине вы сможете найти
          широкий выбор качественных товаров для вашего дома. Отдайте
          предпочтение качеству и комфорту, и вы создадите уютный и комфортный
          дом, который будет радовать вас на протяжении долгих лет.
        </p>
      </div>
    </div>
  )
}

export default About
