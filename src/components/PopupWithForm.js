import Popup from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selector, callback) {
    super(selector);
    this.callback = callback;
    this.callback = this.callback.bind(this);
    this.collection = Array.from(this.selector.querySelectorAll('.popup__input'));
    this.form = this.selector.querySelector('.popup__form');

  }

  _getInputValues() {
    const inputObj = {};
    this.collection.forEach((input) => {
      const nameInp = input.name;
      inputObj[nameInp] = input.value;
    });
    return inputObj;
  }

  setEventListeners() {
    this.form.addEventListener('submit', (evt) => {
      const inputValues = this._getInputValues();
      this.callback(evt, inputValues)
    });
    super.setEventListeners();
  }

  close() {
    super.close();
    this.selector.querySelector('.popup__form').reset();
  }



}