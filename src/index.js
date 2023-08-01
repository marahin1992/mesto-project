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

import { enableValidation } from './components/validate.js';

import {
  openProfilePopUp,
  openPopUpMesto,
  openPopUpAvatar,
} from './components/modal.js';

import { closePopup, setStatusButton } from './components/utils.js'
import { config, Api } from './components/api';
//Создаём глобальную переменную с ID профиля
let profileID;

export const api = new Api(config);

//Добавление карточек с сервера
function renderInitialCards(profileID, cardsData) {
      cardsData.forEach(el => {
        cardContainer.append(createCard(el, profileID));
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
    renderInitialCards(profileID, cardsData);
    //Здесь устанавливаем данные пользователя и рисуем карточки
    })
  .catch(err => console.log(err))

//Открытие попапа редактирования профиля
editButton.addEventListener('click', openProfilePopUp);

//Открытие попапа добавления места
addButton.addEventListener('click', openPopUpMesto);

//Функция редактирование профиля
function handleFormSubmitProfile(evt) {
    evt.preventDefault();
    setStatusButton({formElement: evt.target, text: 'Сохранение...', disabled: true});
    api.editProfileData({
      name: nameInput.value,
      about: jobInput.value})
      .then((profileData) => {
        profileName.textContent = profileData.name;
        profileJob.textContent = profileData.about;
        closePopup(popUpProfile);
        evt.target.reset();
      })
      .catch(err => console.log(err))
      .finally(() => {
        setStatusButton({formElement: evt.target, text: 'Сохранить', disabled: false});
      })     
    
}
//Обаботчик события редактирования профиля
formElementProfile.addEventListener('submit', handleFormSubmitProfile); 

//Функция добавления карточки из формы
function handleFormSubmitMesto(evt) {
  evt.preventDefault();
  setStatusButton({formElement: evt.target, text: 'Сохранение...', disabled: true});
  api.addCard({
    name: titleInput.value,
    link: linkInput.value
    })
    .then(cardData => {
      cardContainer.prepend(createCard(cardData, profileID));
      closePopup(popUpMesto);
      evt.target.reset();
    })
    .catch(err => console.log(err))
    .finally(() => {
    setStatusButton({formElement: evt.target, text: 'Создать', disabled: false});
    }) 
}
//Отправка карточки из формы
formElementMesto.addEventListener('submit', handleFormSubmitMesto);

//Открытие модального окна редактирования аватара
avatarContainer.addEventListener('click', openPopUpAvatar)

//Обновление аватара из формы
function handleFormSubmitAvatar(evt) {
  evt.preventDefault();
  setStatusButton({formElement: evt.target, text: 'Сохранение...', disabled: true});
  api.editProfileAvatar({avatar: avatarInput.value})
  .then(data => {
    avatar.src = data.avatar;
    closePopup(popUpAvatar);
    evt.target.reset();
  })
  .catch(err => console.log(err))
  .finally(() => {
  setStatusButton({formElement: evt.target, text: 'Сохранить', disabled: false});
  }) 
}

formElementAvatar.addEventListener('submit', handleFormSubmitAvatar);
//Организуем вылидацию форм
enableValidation(validateSettings);


