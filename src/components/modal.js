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
} from '../index.js'

import { hideInputError } from './validate.js'

import { openPopup } from './utils.js';


 

//Функция открытия попапа профиля
export function openProfilePopUp() {  
  //Заполняем поля ввода имеющимися данными
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  //скрываем ошибку инпутов
  hideInputError(popUpProfile.querySelector('.popup__form'), nameInput, validateSettings);
  hideInputError(popUpProfile.querySelector('.popup__form'), jobInput, validateSettings);
  //Вызываем функцию открытия попапа
  openPopup(popUpProfile);
}

//Функция открытия попапа добавления места
export function openPopUpMesto() {
  openPopup(popUpMesto);
}

//Функция открытия попапа картинки
export function openPopUpImage(imgObj) {
  popImage.src = imgObj.link;
  popImageTitle.textContent = imgObj.name;
  popImage.alt = 'Фотография ' + imgObj.name;
  openPopup(popUpImage);
}


