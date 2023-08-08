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
const imagePopup = new PopupWithImage('.popup_type_image', '.popup__image', '.popup__image-title');
imagePopup.setEventListeners();
const userInfo = new UserInfo({name:'.profile__name', about: '.profile__status'})
const section = new Section({
  items: '',
  renderer: (item, method) => {
    const cardElement = returnNewCard(item);
    section.addItem(cardElement, method);
    }},
    '.cards');

export const api = new Api(config);

function pasteProfileData(profileData) {
      profileName.textContent = profileData.name;
      profileJob.textContent = profileData.about;
      avatar.src = profileData.avatar;
      return profileID = profileData._id;
} 

function returnNewCard(item) {
  const card = new Card(item, profileID, '#card-template', () => {
    imagePopup.open(item);
  }, handleClickCardDelete, handleClickLike);
  return card.createCard();
}



function handleClickCardDelete() {
  api.deleteCard(this.cardData)
  .then(() => this.removeCard())
  .catch(err => console.log(err))  
}

function handleClickLike(cardLikeCounter, cardLike) {
  if (this.cardData.likes.some(like =>  like._id === this.profileID)) {
    api.deleteLike(this.cardData)
    .then(data => this.renderCardLikeContainer(data, cardLike, cardLikeCounter))
    .catch(err => console.log(err))
  } else {
    api.addLike(this.cardData)
    .then(data => this.renderCardLikeContainer(data, cardLike, cardLikeCounter))
    .catch(err => console.log(err))
  }
}
  
Promise.all([api.getProfileData(), api.getAllCards()])
  .then(([profileData, cardsData]) => {
    pasteProfileData(profileData);
    section.renderItems(cardsData, 'append');
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
        section.renderItems([cardData], 'prepend');
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