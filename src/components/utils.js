//Функция улучшения UI кнопок сабмита, во время запроса на сервер  
export function setStatusButton({ formElement, text, disabled }) {
  const buttonElement = formElement.querySelector('.popup__save-button')
  if (disabled) {
    buttonElement.disabled = 'disabled';
  } else {
    buttonElement.disabled = false;
  }

  buttonElement.textContent = text;
}