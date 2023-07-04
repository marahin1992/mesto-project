export const enableButton = (buttonElement) => {
  buttonElement.disabled = false;
  buttonElement.classList.remove('popup__save-button_disabled');
};

export const disableButton = (buttonElement) => {
  buttonElement.disabled = true;
  buttonElement.classList.add('popup__save-button_disabled');
};