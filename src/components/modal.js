import {
  popUpImage, 
  popImage, 
  popImageTitle, 
  profileName, 
  profileJob,
  nameInput,
  jobInput,
  popUpProfile,
  popUpMesto,
  validateSettings,
  popUpAvatar,
  formElementProfile,
} from './constants.js'

//import { hideInputError } from './validate.js'

import { openPopup } from './utils.js';


 

//Функция открытия попапа профиля
export function openProfilePopUp() {  
  
  //скрываем ошибку инпутов
  //hideInputError(formElementProfile, nameInput, validateSettings);
  //hideInputError(formElementProfile, jobInput, validateSettings);
  //Вызываем функцию открытия попапа
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


