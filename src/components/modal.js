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

import { 
  openPopup,
  closePopup,
 } from './utils.js';


 

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

//Функция сброса попапа картинки
function resetImagePopUp() {
  popImage.src = '';
  popImageTitle.textContent = '';
  popImage.alt = 'Фотография';
}

//Функция сброса попапа картинки
export function closePopUpImage(evt) {
  //это попап картинки, очищаем его
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button') || evt.key === 'Escape'){
    setTimeout(
      resetImagePopUp,
      800
      );
      popUpImage.removeEventListener('click', closePopUpImage);
      document.removeEventListener('keydown', closePopUpImage);
  }
  
}

//Функция открытия попапа картинки
export function openPopUpImage(imgObj) {
  popImage.src = imgObj.link;
  popImageTitle.textContent = imgObj.name;
  popImage.alt = 'Фотография ' + imgObj.name;
  openPopup(popUpImage);
  //слушатели для сброса попапа
  popUpImage.addEventListener('click', closePopUpImage);
  document.addEventListener('keydown', closePopUpImage);
}


