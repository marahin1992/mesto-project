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
} from '../index.js'

import { enableButton } from './utils.js'

import { hideInputError } from './validate.js'



//Функция открытия попапа
export function openPopup(pop) {
  pop.classList.add('popup_opened');
};

//Функция закрытия попапа
export function closePopup(pop) {
  pop.classList.remove('popup_opened');
};

//Функция сброса попапа картинки
function resetImagePopUp() {
  popImage.src = '';
  popImageTitle.textContent = '';
  popImage.alt = 'Фотография';
};

//Функция закрытия попапа на кнопку закрытия и на клик по оверлею
function closePopUpListener(evt) {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
    //если это попап картинки, то очищаем его
    if (evt.target.classList.contains('popup_type_image') || evt.target.closest('.popup_type_image')){
      setTimeout(
        resetImagePopUp,
        800
        );
    }
    closePopup(evt.target.closest('.popup'));
    //Снятие слушателя
    evt.target.closest('.popup').removeEventListener('click', closePopUpListener);
  }  
  }

function closePopUpEscbtn(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
    document.removeEventListener('keydown', closePopUpEscbtn);
  }
}  




//Функция открытия попапа профиля
export function openProfilePopUp() {  
  //Заполняем поля ввода имеющимися данными
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  //Активируем кнопку субмит
  enableButton(popUpProfile.querySelector('.popup__save-button'));
  //скрываем ошибку инпутов
  hideInputError(popUpProfile.querySelector('.popup__form'), nameInput);
  hideInputError(popUpProfile.querySelector('.popup__form'), jobInput);
  //Вызываем функцию открытия попапа
  openPopup(popUpProfile);
  //добавление слушателя закрытия попапа редактирования профиля
  popUpProfile.addEventListener('click', closePopUpListener);
  document.addEventListener('keydown', closePopUpEscbtn);
    
}

//Функция открытия попапа добавления места
export function openPopUpMesto() {
  openPopup(popUpMesto);
  //добавление слушателя закрытия попапа редактирования профиля
  popUpMesto.addEventListener('click', closePopUpListener);
  document.addEventListener('keydown', closePopUpEscbtn);
}



//Функция закрытия попапа картинки
export function closePopUpImage(evt) {
  //closePopup(popUpImage);
  closePopUpListener(evt);
  
};

//Функция открытия попапа картинки
export function popUpImageOpen(imgObj) {
  popImage.src = imgObj.link;
  popImageTitle.textContent = imgObj.name;
  popImage.alt = 'Фотография ' + imgObj.name;
  openPopup(popUpImage);
  popUpImage.addEventListener('click', closePopUpImage);
  document.addEventListener('keydown', closePopUpEscbtn);
};


