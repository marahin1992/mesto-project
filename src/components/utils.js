//Функция закрытия попапа на кнопку закрытия и на клик по оверлею
function closePopUpListener(evt) {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {    
    closePopup(evt.target.closest('.popup'));
  }  
}

function closePopUpEscbtn(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
} 

export function openPopup(pop) {
  pop.classList.add('popup_opened');
  pop.addEventListener('click', closePopUpListener);
  document.addEventListener('keydown', closePopUpEscbtn);
}

//Функция закрытия попапа
export function closePopup(pop) {
  pop.removeEventListener('click', closePopUpListener);
  pop.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopUpEscbtn);
}