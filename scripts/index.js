const popUpProfile = document.querySelector('.popup_type_profile');
const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const closeButtonProfile = popUpProfile.querySelector('.popup__close-button');
const popUpMesto = document.querySelector('.popup_type_mesto');
const closeButtonMesto = popUpMesto.querySelector('.popup__close-button');
const cardContainer = document.querySelector('.cards');
const addButton = profile.querySelector('.profile__add-button');
const popUpImage = document.querySelector('.popup_type_image');
const closeButtonImage = popUpImage.querySelector('.popup__close-button');
const popImage = popUpImage.querySelector('.popup__image');
const popImageTitle = popUpImage.querySelector('.popup__image-title');
const formElementProfile = popUpProfile.querySelector('.popup__form');
const nameInput = formElementProfile.querySelector('input[name="profilename"]');
const jobInput = formElementProfile.querySelector('input[name="profilejob"]');
const formElementMesto = popUpMesto.querySelector('.popup__form');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__status');
const titleInput = formElementMesto.querySelector('input[name="cardname"]');
const linkInput = formElementMesto.querySelector('input[name="cardlink"]');


//Функция открытия попапа
function openPopup(pop) {
  pop.classList.add('popup_opened');
};

//Функция закрытия попапа
function closePopup(pop) {
  pop.classList.remove('popup_opened');
};

//Открытие попапа редактирования профиля
editButton.addEventListener('click', () => {
  openPopup(popUpProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});
//3акрытие попапа редактирования профиля
closeButtonProfile.addEventListener('click', () => {
  closePopup(popUpProfile);
});
//Открытие попапа добавления места
addButton.addEventListener('click', () => {
  openPopup(popUpMesto);
});
//Закрытие попапа добавления места
closeButtonMesto.addEventListener('click', function() {
  closePopup(popUpMesto);
});
//Функция открытия попапа картинки
function popUpImageOpen(imgObj) {
  popImage.src = imgObj.link;
  popImageTitle.textContent = imgObj.name;
  popImage.alt = 'Фотография ' + imgObj.name;
  openPopup(popUpImage);
};
//Закрытие попапа картинки
closeButtonImage.addEventListener('click', function() {
  closePopup(popUpImage);
  setTimeout(() => {
    popImage.src = '';
    popImageTitle.textContent = '';
    popImage.alt = 'Фотография';
  },
  1000
  );
});
//Функция редактирование профиля
function handleFormSubmitProfile(evt) {
    evt.preventDefault();     
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popUpProfile);
}
//Обаботчик события редактирования профиля
formElementProfile.addEventListener('submit', handleFormSubmitProfile); 
//Функция добавления карточки
function addCards(el) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = el.link;
  cardElement.querySelector('.card__title').textContent = el.name;
  cardElement.querySelector('.card__image').alt = 'Фотография ' + el.name;
  cardElement.querySelector('.card__like').addEventListener('click', evt => {
    evt.target.classList.toggle('card__like_liked');
  });
  cardElement.querySelector('.card__delete').addEventListener('click', evt => {
    evt.target.closest('.card').remove();
  });
  cardElement.querySelector('.card__image').addEventListener('click', () => {
    popUpImageOpen(el);
  });
  return cardElement;
}
//Добавление карточек из массива
initialCards.forEach(el => {
  cardContainer.append(addCards(el));
});

//Функция добавления карточки из формы
function mestoFormSubmit(evt) {
  evt.preventDefault();
  const initialCard = {
    name: titleInput.value,
    link: linkInput.value
    };
  cardContainer.prepend(addCards(initialCard));
  popUpMesto.classList.remove('popup_opened');
  evt.target.reset();
}
//Отправка карточки из формы
formElementMesto.addEventListener('submit', mestoFormSubmit);


