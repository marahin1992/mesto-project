//Константы профиля
export const profile = document.querySelector('.profile');
export const editButton = profile.querySelector('.profile__edit-button');
export const profileName = profile.querySelector('.profile__name');
export const profileJob = profile.querySelector('.profile__status');
export const avatar = profile.querySelector('.profile__avatar');
export const avatarContainer = profile.querySelector('.profile__avatar-container');
export const addButton = profile.querySelector('.profile__add-button');//Кнопка добавления карточки
export const popUpAvatar = document.querySelector('.popup_type_avatar');
export const formElementAvatar = document.forms["avatar-form"];
//Константы попапа редактирования профиля
export const popUpProfile = document.querySelector('.popup_type_profile');
export const formElementProfile = document.forms["profile-form"];
export const nameInp = formElementProfile.querySelector('#name-input');
export const jobInp = formElementProfile.querySelector('#job-input');
//Константы попапа добавления места
export const popUpMesto = document.querySelector('.popup_type_mesto');
export const formElementMesto = document.forms["card-form"];

export const validateSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};