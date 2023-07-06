import './pages/index.css';

import { initialCards } from './components/cards.js';

import { addCards } from './components/card.js';

import { enableValidation } from './components/validate.js';

import {
  openProfilePopUp,
  openPopUpMesto,
} from './components/modal.js';

import { closePopup } from './components/utils.js'

//Константы попапа картинки
export const popUpImage = document.querySelector('.popup_type_image');
export const popImage = popUpImage.querySelector('.popup__image');
export const popImageTitle = popUpImage.querySelector('.popup__image-title');
export const closeButtonImage = popUpImage.querySelector('.popup__close-button');
//Константы профиля
const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
export const profileName = profile.querySelector('.profile__name');
export const profileJob = profile.querySelector('.profile__status');
const addButton = profile.querySelector('.profile__add-button');//Кнопка добавления места
//Константы попапа редактирования профиля
export const popUpProfile = document.querySelector('.popup_type_profile');
export const closeButtonProfile = popUpProfile.querySelector('.popup__close-button');
const formElementProfile = document.forms["profile-form"];
export const nameInput = formElementProfile.querySelector('input[name="profilename"]');
export const jobInput = formElementProfile.querySelector('input[name="profilejob"]');
//Константы попапа добавления места
export const popUpMesto = document.querySelector('.popup_type_mesto');
export const closeButtonMesto = popUpMesto.querySelector('.popup__close-button');
const formElementMesto = document.forms["card-form"];
const titleInput = formElementMesto.querySelector('input[name="cardname"]');
const linkInput = formElementMesto.querySelector('input[name="cardlink"]');
//Константы карточек
const cardContainer = document.querySelector('.cards');

export const validateSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  };

//Открытие попапа редактирования профиля
editButton.addEventListener('click', openProfilePopUp);

//Открытие попапа добавления места
addButton.addEventListener('click', openPopUpMesto);

//Функция редактирование профиля
function handleFormSubmitProfile(evt) {
    evt.preventDefault();     
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popUpProfile);
    evt.target.reset();
}
//Обаботчик события редактирования профиля
formElementProfile.addEventListener('submit', handleFormSubmitProfile); 

//Добавление карточек из массива
initialCards.forEach(el => {
  cardContainer.append(addCards(el));
});

//Функция добавления карточки из формы
function handleFormSubmitMesto(evt) {
  evt.preventDefault();
  const initialCard = {
    name: titleInput.value,
    link: linkInput.value
    };
  cardContainer.prepend(addCards(initialCard));
  closePopup(popUpMesto);
  evt.target.reset();
  //disableButton(evt.submitter, validateSettings);
}
//Отправка карточки из формы
formElementMesto.addEventListener('submit', handleFormSubmitMesto);

//Организуем вылидацию форм
enableValidation(validateSettings);

