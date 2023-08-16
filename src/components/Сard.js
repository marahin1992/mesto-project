export class Card {
  constructor(data, profileID, selector, handleCardClick, handleClickCardDelete, handleClickLike) {
    this.cardData = data;
    this.profileID = profileID;
    this.handleCardClick = handleCardClick;
    this._handleClickDelete = handleClickCardDelete;
    this._handleClickLike = handleClickLike;
    this.cardElement = document.querySelector(selector).content.querySelector('.card').cloneNode(true);
  }

   

   _renderDeleteButton(cardDelete) {
    if (this.cardData.owner._id === this.profileID) {
      cardDelete.classList.add('card__delete_enabled');
      cardDelete.addEventListener('click', () => this._handleClickDelete());
    }
  }

   _renderLikeCard(cardLike) {
    if (this.cardData.likes.some(like => like._id === this.profileID)) {
      cardLike.classList.add('card__like_liked')
    }
  }

   renderCardLikeContainer(data, cardLike, cardLikeCounter) {
    cardLikeCounter.textContent = data.likes.length;
    this.cardData.likes = data.likes;
    cardLike.classList.toggle('card__like_liked');
  }

    removeCard() {
      this.cardElement.remove();
    }

    createCard() {
    const cardImage = this.cardElement.querySelector('.card__image');
    const cardLikeCounter = this.cardElement.querySelector('.card__like-counter');
    const cardDelete = this.cardElement.querySelector('.card__delete');
    const cardLike = this.cardElement.querySelector('.card__like');

    this.cardElement.dataset.id = this.cardData._id
    cardImage.src = this.cardData.link;
    this.cardElement.querySelector('.card__title').textContent = this.cardData.name;
    cardImage.alt = 'Фотография ' + this.cardData.name;
    cardLikeCounter.textContent = this.cardData.likes.length;

    this._renderDeleteButton(cardDelete);
    this._renderLikeCard(cardLike);
    
    cardLike.addEventListener('click', () => this._handleClickLike(cardLikeCounter, cardLike));

    cardImage.addEventListener('click', () => {
      this.handleCardClick();
    });
    return this.cardElement;
  }

}

