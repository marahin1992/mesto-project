export const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-26',
  headers: {
    'content-type': 'application/json',
    'authorization': '2e13d1ed-4c1c-4aa9-8a4c-82d13ffda241',
  }
}


export class Api {
  constructor(config) {
    this.baseUrl = config.baseUrl;
    this.headers = config.headers;
  }

  //проверяем на ошибку
onResponse(res) {
  return res.ok ? res.json() : res.json().then((data) => Promise.reject(data));
}

//получение данных профиля
getProfileData() {
  return fetch(`${this.baseUrl}/users/me`, {
    headers: this.headers
  })
    .then(this.onResponse)    
}

//получение данных карточек
getAllCards() {
  return fetch(`${this.baseUrl}/cards`, {
    headers: this.headers
  }).then(this.onResponse)
}

//редактирование профиля на сервере
editProfileData(body) {
  return fetch(`${this.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: this.headers,
    body: JSON.stringify(body)
  })
    .then(this.onResponse)    
}

addCard(body) {
  return fetch(`${this.baseUrl}/cards`, {
    method: 'POST',
    headers: this.headers,
    body: JSON.stringify(body)
  })
    .then(this.onResponse) 
}

deleteCard(card) {
  return fetch(`${this.baseUrl}/cards/${card._id}`, {
    method: 'DELETE',
    headers: this.headers,
  })
    .then(this.onResponse) 
}

addLike(card) {
  return fetch(`${this.baseUrl}/cards/likes/${card._id}`, {
    method: 'PUT',
    headers: this.headers,
  })
    .then(this.onResponse)
} 

deleteLike(card) {
  return fetch(`${this.baseUrl}/cards/likes/${card._id}`, {
    method: 'DELETE',
    headers: this.headers,
  })
    .then(this.onResponse)
}

editProfileAvatar(body) {
  return fetch(`${this.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: this.headers,
    body: JSON.stringify(body)
  })
    .then(this.onResponse)    
}


}




















