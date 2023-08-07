export default class Popup {
  constructor(selector) {
   this.element = document.querySelector(selector);
   this._handleEscClose = this._handleEscClose.bind(this)
  }

  setEventListeners() {
    this.element.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {    
        this.close();
      }
    });
  }
  //Функция закрытия попапа на клавишу эскапе
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  } 
  //Функция открытия попапа
  open() {
    this.element.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  //Функция закрытия попапа
  close() {
    this.element.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

}