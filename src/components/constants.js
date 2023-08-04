//Константы попапа картинки
export const popUpImage = document.querySelector('.popup_type_image');
export const popImage = popUpImage.querySelector('.popup__image');
export const popImageTitle = popUpImage.querySelector('.popup__image-title');
//Константы профиля
export const profile = document.querySelector('.profile');
export const editButton = profile.querySelector('.profile__edit-button');
export const profileName = profile.querySelector('.profile__name');
export const profileJob = profile.querySelector('.profile__status');
export const avatar = profile.querySelector('.profile__avatar');
export const avatarContainer = profile.querySelector('.profile__avatar-container');
export const addButton = profile.querySelector('.profile__add-button');//Кнопка добавления карточки
export const popUpAvatar = document.querySelector('.popup_type_avatar');
export const formElementAvatar = document.forms["avatar-form"]
export const avatarInput = formElementAvatar.querySelector('input[name="avatarlink"]');
//Константы попапа редактирования профиля
export const popUpProfile = document.querySelector('.popup_type_profile');
export const formElementProfile = document.forms["profile-form"];
//console.log(formElementProfile);
export const nameInput = formElementProfile.querySelector('input[name="profilename"]');
export const nameInp = formElementProfile.querySelector('#name-input')
//console.log(nameInp)
export const jobInput = formElementProfile.querySelector('input[name="profilejob"]');
export const jobInp = formElementProfile.querySelector('#job-input');
//console.log(jobInp)
//Константы попапа добавления места
export const popUpMesto = document.querySelector('.popup_type_mesto');
export const formElementMesto = document.forms["card-form"];
export const titleInput = formElementMesto.querySelector('input[name="cardname"]');
export const linkInput = formElementMesto.querySelector('input[name="cardlink"]');
//Константы карточек
export const cardContainer = document.querySelector('.cards');

export const validateSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};