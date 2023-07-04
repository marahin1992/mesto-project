//Функция добавления карточки
import {popUpImageOpen} from './modal.js'

export function addCards(el) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = el.link;
  cardElement.querySelector('.card__title').textContent = el.name;
  cardElement.querySelector('.card__image').alt = 'Фотография ' + el.name;
  return cardElement;
}

//Функция колбек обработчика событий каточки
export function handleCardsEvents(evt) {
  if (evt.target.classList.contains('card__like')) {
    evt.target.classList.toggle('card__like_liked');
  }
  if (evt.target.classList.contains('card__delete')) {
    evt.target.closest('.card').remove();
  }
  if  (evt.target.classList.contains('card__image')) {
    const cardObj = {
      name: evt.target.closest('.card').querySelector('.card__title').textContent,
      link: evt.target.src,
    }
    popUpImageOpen(cardObj);
  }
}