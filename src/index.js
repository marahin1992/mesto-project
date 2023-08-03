import './pages/index.css';

import {
  editButton,
  profileName,
  profileJob,
  avatar,
  avatarContainer,
  addButton,
  popUpAvatar,
  formElementAvatar,
  avatarInput,
  popUpProfile,
  formElementProfile,
  nameInput,
  jobInput,
  popUpMesto,
  formElementMesto,
  titleInput,
  linkInput,
  cardContainer,
  validateSettings,
} from './components/constants.js'

import { createCard } from './components/card.js';

import { FormValidator } from './components/validate.js';

import {
  openProfilePopUp,
  openPopUpMesto,
  openPopUpAvatar,
} from './components/modal.js';

import { closePopup, setStatusButton } from './components/utils.js'
import { config, Api } from './components/api';
import { Card } from './components/card.js';
import Section from './components/Section.js';
import { PopupWithForm } from './components/PopupWithForm';
import { PopupWithImage } from './components/PopupWithImage';
//Создаём глобальную переменную с ID профиля
let profileID;
const profileEditPopup = new PopupWithForm('.popup_type_profile', handleFormSubmitProfile);
profileEditPopup.setEventListeners();
const cardEditPopup = new PopupWithForm('.popup_type_mesto', handleFormSubmitMesto);
cardEditPopup.setEventListeners();
const avatarEditPopup = new PopupWithForm('.popup_type_avatar', handleFormSubmitAvatar);
avatarEditPopup.setEventListeners();
const imagePopup = new PopupWithImage('.popup_type_image');




export const api = new Api(config);
//const card = new Card(); /!!!!/
//Добавление карточек с сервера
function renderInitialCards(profileID, cardsData) {
      cardsData.forEach(el => {
        const card = new Card(el, profileID, '#card-template');
        //cardContainer.append(createCard(el, profileID));
          cardContainer.append(card.createCard());
    })
}



function pasteProfileData(profileData) {
      profileName.textContent = profileData.name;
      profileJob.textContent = profileData.about;
      avatar.src = profileData.avatar;
      return profileID = profileData._id;
} 
  


Promise.all([api.getProfileData(), api.getAllCards()])
  .then(([profileData, cardsData]) => {
    pasteProfileData(profileData);
    const cardInsertAppend = new Section({
      items: cardsData, 
      renderer: (item) => {
        const card = new Card(item, profileID, '#card-template');
        const cardElement = card.createCard();
        cardInsertAppend.addItem(cardElement, 'append');
      }},
      '.cards' 
      )
      cardInsertAppend.renderItems();
    //renderInitialCards(profileID, cardsData);
    //Здесь устанавливаем данные пользователя и рисуем карточки
    })
  .catch(err => console.log(err))

//Открытие попапа редактирования профиля
editButton.addEventListener('click', () => {
  profileEditPopup.open();
});

//Открытие попапа добавления места
addButton.addEventListener('click', () => {
  cardEditPopup.open();
});

//Функция редактирование профиля
function handleFormSubmitProfile(evt, inputValues) {
    evt.preventDefault();
    setStatusButton({formElement: evt.target, text: 'Сохранение...', disabled: true});    
    api.editProfileData(inputValues)
      .then((profileData) => {
        profileName.textContent = profileData.name;
        profileJob.textContent = profileData.about;
        profileEditPopup.close();
      })
      .catch(err => console.log(err))
      .finally(() => {
        setStatusButton({formElement: evt.target, text: 'Сохранить', disabled: false});
      })     
    
}
//Обаботчик события редактирования профиля
//formElementProfile.addEventListener('submit', handleFormSubmitProfile); 

//Функция добавления карточки из формы
function handleFormSubmitMesto(evt, inputValues) {
  evt.preventDefault();
  setStatusButton({formElement: evt.target, text: 'Сохранение...', disabled: true});
  api.addCard(inputValues)
    .then(cardData => {
        const cardInsertPrepend = new Section({
        items: [cardData], 
        renderer: (item) => {
          const card = new Card(item, profileID, '#card-template');
          const cardElement = card.createCard();
          cardInsertPrepend.addItem(cardElement, 'prepend');
        }},
        '.cards' 
        )
        cardInsertPrepend.renderItems();
        cardEditPopup.close();
      //const card = new Card(cardData, profileID, '#card-template');
      //cardContainer.prepend(card.createCard());
      //closePopup(popUpMesto);
    })
    .catch(err => console.log(err))
    .finally(() => {
    setStatusButton({formElement: evt.target, text: 'Создать', disabled: false});
    }) 
}
//Отправка карточки из формы
//formElementMesto.addEventListener('submit', handleFormSubmitMesto);

//Открытие модального окна редактирования аватара
avatarContainer.addEventListener('click', () => {
  avatarEditPopup.open();
});

//Обновление аватара из формы
function handleFormSubmitAvatar(evt, inputValues) {
  evt.preventDefault();
  setStatusButton({formElement: evt.target, text: 'Сохранение...', disabled: true});
  api.editProfileAvatar(inputValues)
  .then(data => {
    avatar.src = data.avatar;
    avatarEditPopup.close();
  })
  .catch(err => console.log(err))
  .finally(() => {
  setStatusButton({formElement: evt.target, text: 'Сохранить', disabled: false});
  }) 
}

//formElementAvatar.addEventListener('submit', handleFormSubmitAvatar);
//Организуем вылидацию форм
const formList = Array.from(document.querySelectorAll(validateSettings.formSelector));

    formList.forEach((formElement) => {
      const formValidation = new FormValidator(validateSettings, formElement)
      formValidation.enableValidation();
    });



