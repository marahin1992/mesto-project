import {
  popImage,
  popImageTitle,
} from './constants.js';
import Popup from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);

  }

  open(item) {
    super.open();
    popImage.src = item.link;
    popImageTitle.textContent = item.name;
    popImage.alt = 'Фотография ' + item.name;
  }
}