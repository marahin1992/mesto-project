export default class Popup {
  constructor(selector) {
   this.selector = selector;
  }

  setEventListeners() {
    document.querySelector(this.selector).addEventListener('click', (evt) => {
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
    document.querySelector(this.selector).classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  //Функция закрытия попапа
  close() {
    document.querySelector(this.selector).removeEventListener('click', this.setEventListeners);
    document.querySelector(this.selector).classList.remove('popup_opened');
  }

}