const popUpProfile = document.querySelector('.popup_profile');
const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const closeButtonProfile = popUpProfile.querySelector('.popup__close-button');
const popUpMesto = document.querySelector('.popup_mesto');
const closeButtonMesto = popUpMesto.querySelector('.popup__close-button');
const cards = document.querySelector('.cards');
const addButton = profile.querySelector('.profile__add-button');
const popUpImage = document.querySelector('.popup_type_image');
const closeButtonImage = popUpImage.querySelector('.popup__close-button');
const popImage = popUpImage.querySelector('.popup__image');
const popImageTitle = popUpImage.querySelector('.popup__image-title');
const formElement = popUpProfile.querySelector('.popup__form');
const nameInput = formElement.querySelector('input[name="profilename"]');
const jobInput = formElement.querySelector('input[name="profilejob"]');

const formElementMesto = popUpMesto.querySelector('.popup__form');

//Открытие-закрытие попапа редактирования профиля
editButton.addEventListener('click', function() {
  popUpProfile.classList.add('popup_opened');
  nameInput.value = profile.querySelector('.profile__name').textContent;
  jobInput.value = profile.querySelector('.profile__status').textContent;
});

closeButtonProfile.addEventListener('click', function() {
  popUpProfile.classList.remove('popup_opened');
})
//Открытие-закрытие попапа добавления места
addButton.addEventListener('click', function() {
  popUpMesto.classList.add('popup_opened');
});

closeButtonMesto.addEventListener('click', function() {
  popUpMesto.classList.remove('popup_opened');
})

//открытие попапа картинки
function popUpImageOpen(imgObj) {
  popImage.src = imgObj.link;
  popImageTitle.textContent = imgObj.name;
  popUpImage.classList.add('popup_opened');
}

closeButtonImage.addEventListener('click', function() {
  popUpImage.classList.remove('popup_opened');
})
//редактирование профиля
function handleFormSubmit(evt) {
    evt.preventDefault(); 
    const profileName = profile.querySelector('.profile__name');
    const profileJob = profile.querySelector('.profile__status');
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popUpProfile.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit); 



//функция добавления катрочки
function addCards(arr) {
  for (let i = 0; i < arr.length; i++) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = arr[i].link;
  cardElement.querySelector('.card__title').textContent = arr[i].name;
  cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_liked');
  });
  cardElement.querySelector('.card__delete').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  })
  cardElement.querySelector('.card__image').addEventListener('click', function () {
    popUpImageOpen(arr[i]);
  })    
  cards.prepend(cardElement);
  }
  
}


function mestoFormSubmit(evt) {
  evt.preventDefault(); 
  const titleInput = formElementMesto.querySelector('input[name="cardname"]');
  const linkInput = formElementMesto.querySelector('input[name="cardlink"]');
  const initialCard = [
    {
  name: titleInput.value,
  link: linkInput.value
    }
  ];
  addCards(initialCard);
  popUpMesto.classList.remove('popup_opened');
  titleInput.value = '';
  linkInput.value = '';
}

formElementMesto.addEventListener('submit', mestoFormSubmit);

//Пока эта информация не сохраняется между перезагрузками страницы. Мы научимся сохранять её позже, когда подключим сайт к серверу.
//2. Шесть карточек «из коробки»
//При загрузке на странице должно быть 6 карточек, которые добавит JavaScript. Их названия и фотографии выберите сами или возьмите готовый массив:
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

addCards(initialCards);

