export class Card {
  constructor(data, profileID, selector, handleCardClick, handleClickCardDelete, handleClickLike) {
    this.cardData = data;
    this.profileID = profileID;
    this.selector = selector;
    this.handleCardClick = handleCardClick;
    this._handleClickDelete = handleClickCardDelete;
    this._handleClickLike = handleClickLike;
  }

   

   _renderDeleteButton(cardDelete, cardElement) {
    if (this.cardData.owner._id === this.profileID) {
      cardDelete.classList.add('card__delete_enabled');
      cardDelete.addEventListener('click', () => this._handleClickDelete(cardElement, this.removeCard));
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

    removeCard(cardElement) {
      cardElement.remove();
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

