import { api } from '../index.js';

export class Card {
  constructor(data, profileID, selector, handleCardClick) {
    this.cardData = data;
    this.profileID = profileID;
    this.selector = selector;
    this.handleCardClick = handleCardClick;
  }

   _handleClickDelete(cardElement) {
    api.deleteCard(this.cardData)
    .then(cardElement.remove());  
  }

   _renderDeleteButton(cardDelete, cardElement) {
    if (this.cardData.owner._id === this.profileID) {
      cardDelete.classList.add('card__delete_enabled');
      cardDelete.addEventListener('click', () => this._handleClickDelete(cardElement));
    }
  }

   _renderLikeCard(cardLike) {
    if (this.cardData.likes.some(like => like._id === this.profileID)) {
      cardLike.classList.add('card__like_liked')
    }
  }

   _renderCardLikeContainer(data, cardLike, cardLikeCounter) {
    cardLikeCounter.textContent = data.likes.length;
    this.cardData.likes = data.likes;
    cardLike.classList.toggle('card__like_liked');
  }

   _handleClickLike(cardLikeCounter, cardLike) {
    if (this.cardData.likes.some(like =>  like._id === this.profileID)) {
      api.deleteLike(this.cardData)
      .then(data => this._renderCardLikeContainer(data, cardLike, cardLikeCounter))
    } else {
      api.addLike(this.cardData)
      .then(data => this._renderCardLikeContainer(data, cardLike, cardLikeCounter))
    }
  }

    createCard() {
    const cardTemplate = document.querySelector(this.selector).content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardLikeCounter = cardElement.querySelector('.card__like-counter');
    const cardDelete = cardElement.querySelector('.card__delete');
    const cardLike = cardElement.querySelector('.card__like');

    cardElement.dataset.id = this.cardData._id
    cardImage.src = this.cardData.link;
    cardElement.querySelector('.card__title').textContent = this.cardData.name;
    cardImage.alt = 'Фотография ' + this.cardData.name;
    cardLikeCounter.textContent = this.cardData.likes.length;

    this._renderDeleteButton(cardDelete, cardElement);
    this._renderLikeCard(cardLike);
    
    cardLike.addEventListener('click', () => this._handleClickLike(cardLikeCounter, cardLike));

    cardImage.addEventListener('click', () => {
      this.handleCardClick();
    });
    return cardElement;
  }

}

