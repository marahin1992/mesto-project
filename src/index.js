import './pages/index.css';

import { initialCards } from './components/cards.js';

import { addCards } from './components/card.js';

import { enableValidation } from './components/validate.js';

import {
  openProfilePopUp,
  openPopUpMesto,
  openPopUpAvatar,
} from './components/modal.js';

import { closePopup } from './components/utils.js'
import { getProfileData, getAllCards, editProfileData, addCard, editProfileAvatar } from './components/api';

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
const avatar = profile.querySelector('.profile__avatar');
const addButton = profile.querySelector('.profile__add-button');//Кнопка добавления карточки
export const popUpAvatar = document.querySelector('.popup_type_avatar');
const formElementAvatar = document.forms["avatar-form"]
const avatarInput = formElementAvatar.querySelector('input[name="avatarlink"]');
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
export let profileID;

export const validateSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  };

//Добавление карточек с сервера
function renderInitialCards(profileID) {
  getAllCards()
    .then(cardsData => {
      cardsData.forEach(el => {
        cardContainer.append(addCards(el, profileID));
    })
  
  });
}



function pasteProfileData() {
  getProfileData()
    .then(profileData => {
      profileName.textContent = profileData.name;
      profileJob.textContent = profileData.about;
      avatar.src = profileData.avatar;
      return profileID = profileData._id;
    })
    .then (renderInitialCards)
    
}

pasteProfileData();


//Открытие попапа редактирования профиля
editButton.addEventListener('click', openProfilePopUp);

//Открытие попапа добавления места
addButton.addEventListener('click', openPopUpMesto);

//Функция редактирование профиля
function handleFormSubmitProfile(evt) {
    evt.preventDefault();
    editProfileData({
      name: nameInput.value,
      about: jobInput.value})
      .then((profileData) => {
        profileName.textContent = profileData.name;
        profileJob.textContent = profileData.about;
        closePopup(popUpProfile);
        evt.target.reset();
      })     
    
}
//Обаботчик события редактирования профиля
formElementProfile.addEventListener('submit', handleFormSubmitProfile); 

//Добавление карточек из массива
/*initialCards.forEach(el => {
  cardContainer.append(addCards(el));
});*/

  

//Функция добавления карточки из формы
function handleFormSubmitMesto(evt) {
  evt.preventDefault();
  addCard({
    name: titleInput.value,
    link: linkInput.value
    })
    .then(cardData => {
      cardContainer.prepend(addCards(cardData, profileID));
      closePopup(popUpMesto);
      evt.target.reset();
    })
  
  //disableButton(evt.submitter, validateSettings);
}
//Отправка карточки из формы
formElementMesto.addEventListener('submit', handleFormSubmitMesto);

//Открытие модального окна редактирования аватара
avatar.addEventListener('click', openPopUpAvatar)

function handleFormSubmitAvatar(evt) {
  evt.preventDefault();
  editProfileAvatar({avatar: avatarInput.value})
  .then(data => {
    console.log(data);
    avatar.src = data.avatar;
    closePopup(popUpAvatar);
    evt.target.reset();
  })
}

formElementAvatar.addEventListener('submit', handleFormSubmitAvatar);
//Организуем вылидацию форм
enableValidation(validateSettings);

/*editProfileData({
  name: 'Андрей Марахин',
    about: 'Человек-разгадка'
});*/


