import Popup from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(selector, popImage, popImageTitle) {
    super(selector);
    this.popImage = document.querySelector(popImage);
    this.popImageTitle = document.querySelector(popImageTitle);
  }

  open(item) {
    super.open();
    this.popImage.src = item.link;
    this.popImageTitle.textContent = item.name;
    this.popImage.alt = 'Фотография ' + item.name;
  }
}