import Popup from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selector, callback) {
    super(selector);
    this.callback = callback;
    this.callback = this.callback.bind(this);

  }

  _getInputValues() {
    const inputObj = {};
    Array.from(document.querySelector(this.selector).querySelectorAll('.popup__input')).forEach((input) => {
      const nameInp = input.name;
      inputObj[nameInp] = input.value;
    });
    return inputObj;
  }

  setEventListeners() {
    document.querySelector(this.selector).querySelector('.popup__form').addEventListener('submit', (evt) => {
      const inputValues = this._getInputValues();
      this.callback(evt, inputValues)
    });
    super.setEventListeners();
  }

  close() {
    super.close();
    document.querySelector(this.selector).querySelector('.popup__form').reset();
  }



}