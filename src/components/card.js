//Функция добавления карточки
import {openPopUpImage} from './modal.js'
import { api } from '../index.js';

function handleClickDelete(cardData, cardElement) {
  api.deleteCard(cardData)
  .then(cardElement.remove());
}

function renderDeleteButton(cardData, profileID, cardDelete, cardElement) {
  if (cardData.owner._id === profileID) {
    cardDelete.classList.add('card__delete_enabled');
    cardDelete.addEventListener('click', () => handleClickDelete(cardData, cardElement));
  }
}

function renderLikeCard(cardData, cardLike, profileID) {
  if (cardData.likes.some(like => like._id === profileID)) {
    cardLike.classList.add('card__like_liked')
  }
}

function renderCardLikeContainer(data, cardData, cardLike, cardLikeCounter) {
  cardLikeCounter.textContent = data.likes.length;
  cardData.likes = data.likes;
  cardLike.classList.toggle('card__like_liked');
}

function handleClickLike(cardData, profileID, cardLikeCounter, cardLike) {
  if (cardData.likes.some(like =>  like._id === profileID)) {
    api.deleteLike(cardData)
    .then(data => renderCardLikeContainer(data, cardData, cardLike, cardLikeCounter))
  } else {
    api.addLike(cardData)
    .then(data => renderCardLikeContainer(data, cardData, cardLike, cardLikeCounter))
  }
}

export function createCard(cardData, profileID) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardLikeCounter = cardElement.querySelector('.card__like-counter');
  const cardDelete = cardElement.querySelector('.card__delete');
  const cardLike = cardElement.querySelector('.card__like');


  cardElement.dataset.id = cardData._id
  cardImage.src = cardData.link;
  cardElement.querySelector('.card__title').textContent = cardData.name;
  cardImage.alt = 'Фотография ' + cardData.name;
  cardLikeCounter.textContent = cardData.likes.length;


  renderDeleteButton(cardData, profileID, cardDelete, cardElement);
  renderLikeCard(cardData, cardLike, profileID);
  
  cardLike.addEventListener('click', () => handleClickLike(cardData, profileID, cardLikeCounter, cardLike));

  cardImage.addEventListener('click', () => {
    openPopUpImage(cardData);
  });
  return cardElement;
}

