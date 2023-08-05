import './pages/index.css';

import {
  editButton,
  profileName,
  profileJob,
  avatar,
  avatarContainer,
  addButton,
  nameInp,
  jobInp,
  validateSettings,
} from './components/constants.js'

import { FormValidator } from './components/FormValidator.js';

import { setStatusButton } from './components/utils.js'
import { config, Api } from './components/Api';
import { Card } from './components/Сard.js';
import Section from './components/Section.js';
import { PopupWithForm } from './components/PopupWithForm';
import { PopupWithImage } from './components/PopupWithImage';
import UserInfo from './components/UserInfo';
//Создаём глобальную переменную с ID профиля
let profileID;
const profileEditPopup = new PopupWithForm('.popup_type_profile', handleFormSubmitProfile);
profileEditPopup.setEventListeners();
const cardEditPopup = new PopupWithForm('.popup_type_mesto', handleFormSubmitMesto);
cardEditPopup.setEventListeners();
const avatarEditPopup = new PopupWithForm('.popup_type_avatar', handleFormSubmitAvatar);
avatarEditPopup.setEventListeners();
const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();
const userInfo = new UserInfo({name:'.profile__name', about: '.profile__status'})



export const api = new Api(config);

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
        const card = new Card(item, profileID, '#card-template', () => {
          imagePopup.open(item);
        });
        const cardElement = card.createCard();
        cardInsertAppend.addItem(cardElement, 'append');
      }},
      '.cards' 
      )
      cardInsertAppend.renderItems();
    })
  .catch(err => console.log(err))

//Открытие попапа редактирования профиля
editButton.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  nameInp.value = data.name;
  jobInp.value = data.about;
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
        userInfo.setUserInfo(profileData);
        profileEditPopup.close();
      })
      .catch(err => console.log(err))
      .finally(() => {
        setStatusButton({formElement: evt.target, text: 'Сохранить', disabled: false});
      })      
}

//Функция добавления карточки из формы
function handleFormSubmitMesto(evt, inputValues) {
  evt.preventDefault();
  setStatusButton({formElement: evt.target, text: 'Сохранение...', disabled: true});
  api.addCard(inputValues)
    .then(cardData => {
        const cardInsertPrepend = new Section({
        items: [cardData], 
        renderer: (item) => {
          const card = new Card(item, profileID, '#card-template', () => {
            imagePopup.open(item);
          });
          const cardElement = card.createCard();
          cardInsertPrepend.addItem(cardElement, 'prepend');
        }},
        '.cards' 
        )
        cardInsertPrepend.renderItems();
        cardEditPopup.close();
    })
    .catch(err => console.log(err))
    .finally(() => {
    setStatusButton({formElement: evt.target, text: 'Создать', disabled: false});
    }) 
}

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

//Организуем вылидацию форм
const formList = Array.from(document.querySelectorAll(validateSettings.formSelector));

formList.forEach((formElement) => {
  const formValidation = new FormValidator(validateSettings, formElement)
  formValidation.enableValidation();
});



userInfo.getUserInfo()