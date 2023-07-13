//Функция добавления карточки
import {openPopUpImage} from './modal.js'
import { deleteCard, addLike, deleteLike } from './api.js';

function handleClickDelete(el, cardElement) {
  deleteCard(el)
  .then(cardElement.remove());
}

function renderDeleteButton(el, profileID, cardDelete, cardElement) {
  if (el.owner._id === profileID) {
    cardDelete.classList.add('card__delete_enabled');
    cardDelete.addEventListener('click', () => handleClickDelete(el, cardElement));
  }
}

function renderLikeCard(el, cardLike, profileID) {
  if (el.likes.some(like => like._id === profileID)) {
    cardLike.classList.add('card__like_liked')
  }
}

function renderCardLikeContainer(data, el, cardLike, cardLikeCounter) {
  cardLikeCounter.textContent = data.likes.length;
  el.likes = data.likes;
  cardLike.classList.toggle('card__like_liked');
}

function handleClikcLike(el, profileID, cardLikeCounter, cardLike) {
  if (el.likes.some(like =>  like._id === profileID)) {
    deleteLike(el)
    .then(data => renderCardLikeContainer(data, el, cardLike, cardLikeCounter))
  } else {
    addLike(el)
    .then(data => renderCardLikeContainer(data, el, cardLike, cardLikeCounter))
  }
}

export function addCards(el, profileID) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardLikeCounter = cardElement.querySelector('.card__like-counter');
  const cardDelete = cardElement.querySelector('.card__delete');
  const cardLike = cardElement.querySelector('.card__like');


  cardElement.dataset.id = el._id
  cardImage.src = el.link;
  cardElement.querySelector('.card__title').textContent = el.name;
  cardImage.alt = 'Фотография ' + el.name;
  cardLikeCounter.textContent = el.likes.length;


  renderDeleteButton(el, profileID, cardDelete, cardElement);
  renderLikeCard(el, cardLike, profileID);
  
  cardLike.addEventListener('click', () => handleClikcLike(el, profileID, cardLikeCounter, cardLike));

  cardImage.addEventListener('click', () => {
    openPopUpImage(el);
  });
  return cardElement;
}

