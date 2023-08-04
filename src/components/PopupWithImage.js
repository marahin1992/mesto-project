import {
  popImage,
  popImageTitle,
} from './constants.js';
import Popup from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(data, selector) {
    super(selector);
    this.link = data.link;
    this.name = data.name;

  }

  open() {
    super.open();
    popImage.src = this.link;
    popImageTitle.textContent = this.name;
    popImage.alt = 'Фотография ' + this.name;
  }
}