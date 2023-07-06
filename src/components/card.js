//Функция добавления карточки
import {openPopUpImage} from './modal.js'

export function addCards(el) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = el.link;
  cardElement.querySelector('.card__title').textContent = el.name;
  cardImage.alt = 'Фотография ' + el.name;
  cardElement.querySelector('.card__like').addEventListener('click', evt => {
    evt.target.classList.toggle('card__like_liked');
  });
  cardElement.querySelector('.card__delete').addEventListener('click', evt => {
    evt.target.closest('.card').remove();
  });
  cardImage.addEventListener('click', () => {
    openPopUpImage(el);
  });
  return cardElement;
}

