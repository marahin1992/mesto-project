import {
  popUpImage, 
  popImage, 
  popImageTitle, 
  popUpProfile,
  popUpMesto,
  popUpAvatar,
} from './constants.js'

import { openPopup } from './utils.js';


 

//Функция открытия попапа профиля
export function openProfilePopUp() {  
  openPopup(popUpProfile);
}

//Функция открытия попапа добавления места
export function openPopUpMesto() {
  openPopup(popUpMesto);
}

export function openPopUpAvatar() {
  openPopup(popUpAvatar)
}

//Функция открытия попапа картинки
export function openPopUpImage(imgObj) {
  popImage.src = imgObj.link;
  popImageTitle.textContent = imgObj.name;
  popImage.alt = 'Фотография ' + imgObj.name;
  openPopup(popUpImage);
}


