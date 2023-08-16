export class FormValidator {

  constructor(settings, formElement) {
    this.settings = settings;
    this.formElement = formElement;
    this.inputList = Array.from(this.formElement.querySelectorAll(this.settings.inputSelector));
    this.buttonElement = this.formElement.querySelector(this.settings.submitButtonSelector);
  }

  _enableButton() {
    this.buttonElement.disabled = false;
    this.buttonElement.classList.remove(this.settings.inactiveButtonClass);
  }

  _disableButton() {
    this.buttonElement.disabled = true;
    this.buttonElement.classList.add(this.settings.inactiveButtonClass);
  }

  // Функция, которая добавляет класс с ошибкой
  _showInputError(inputElement, errorMessage) {
    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this.settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.settings.errorClass);
  }

  // Функция, которая удаляет класс с ошибкой
  _hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this.settings.inputErrorClass);
    errorElement.classList.remove(this.settings.errorClass);
    errorElement.textContent = '';
  }

  // Функция, которая проверяет валидность поля
  _isValid(inputElement) {
    if (inputElement.validity.patternMismatch) {
      // встроенный метод setCustomValidity принимает на вход строку
      // и заменяет ею стандартное сообщение об ошибке
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      // если передать пустую строку, то будут доступны
      // стандартные браузерные сообщения
    inputElement.setCustomValidity("");
    }

    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      // Если проходит, скроем
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }


  _toggleButtonState() {
    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput()) {
      // сделай кнопку неактивной
      this._disableButton();
    } else {
      // иначе сделай кнопку активной
      this._enableButton();
    }
  } 



  _setEventListeners() {
    
    this._toggleButtonState();

    this.formElement.addEventListener('reset', () => {
      this._disableButton()
    });
    // Обойдём все элементы полученной коллекции
    this.inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
      this._setEventListeners();
  }

}