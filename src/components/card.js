//Функция добавления карточки
import {openPopUpImage} from './modal.js'
import { deleteCard, addLike, deleteLike } from './api.js';

export function addCards(el, profileID) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardLikeCounter = cardElement.querySelector('.card__like-counter');
  const cardDelete = cardElement.querySelector('.card__delete');
  cardElement.dataset.id = el._id
  if (el.owner._id === profileID) {
    cardDelete.classList.add('card__delete_enabled');
    cardDelete.addEventListener('click', evt => {
      deleteCard(el)
      .then(evt.target.closest('.card').remove());
    });
  }
  cardImage.src = el.link;
  cardElement.querySelector('.card__title').textContent = el.name;
  cardImage.alt = 'Фотография ' + el.name;
  cardLikeCounter.textContent = el.likes.length;
  if (el.likes.some(like => like._id === profileID)) {
    cardElement.querySelector('.card__like').classList.add('card__like_liked')
  }
  cardElement.querySelector('.card__like').addEventListener('click', evt => {
    if (el.likes.some(like =>  like._id === profileID)) {
      deleteLike(el)
      .then(data => {
        cardLikeCounter.textContent = data.likes.length;
        el.likes = data.likes;
        evt.target.classList.toggle('card__like_liked');
      })
    } else {
      addLike(el)
      .then(data => {
        cardLikeCounter.textContent = data.likes.length;
        el.likes = data.likes;
        evt.target.classList.toggle('card__like_liked');
      })
    }
    
  });
  /*cardElement.querySelector('.card__delete_enabled').addEventListener('click', evt => {
    evt.target.closest('.card').remove();
  });*/
  cardImage.addEventListener('click', () => {
    openPopUpImage(el);
  });
  return cardElement;
}

