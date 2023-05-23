import React from 'react'

const form = () => {
  return (
    <div className="contacts">
      <h1 className="contacts__title title">Контакты</h1>
      <form className="contacts__form form">
        <div className="form__row">
          <div className="form__item">
            <label className="form__label" for="name">
              Имя
            </label>
            <input
              className="form__input form__field"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form__item">
            <label className="form__label" for="surname">
              Фамилия
            </label>
            <input
              className="form__input form__field"
              type="text"
              id="surname"
              name="surname"
              required
            />
          </div>
        </div>
        <div className="form__item">
          <label className="form__label" for="message">
            Сообщение
          </label>
          <textarea
            className="form__textarea form__field"
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>
        <button className="form__btn" type="submit">
          Отправить
        </button>
      </form>
    </div>
  )
}

export default form
