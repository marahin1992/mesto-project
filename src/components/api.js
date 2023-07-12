const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-26',
  headers: {
    'content-type': 'application/json',
    'authorization': '2e13d1ed-4c1c-4aa9-8a4c-82d13ffda241',
  }
}

//проверяем на ошибку
function onResponse(res) {
  return res.ok ? res.json() : res.json().then((data) => Promise.reject(data));
}

//получение данных профиля
export function getProfileData() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(onResponse)    
}

//получение данных карточек
export function getAllCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  }).then(onResponse)
}

//редактирование профиля на сервере
export function editProfileData(body) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify(body)
  })
    .then(onResponse)    
}

export function addCard(body) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(body)
  })
    .then(onResponse) 
}

export function deleteCard(card) {
  return fetch(`${config.baseUrl}/cards/${card._id}`, {
    method: 'DELETE',
    headers: config.headers,
  })
    .then(onResponse) 
}

export function addLike(card) {
  return fetch(`${config.baseUrl}/cards/likes/${card._id}`, {
    method: 'PUT',
    headers: config.headers,
  })
    .then(onResponse)
} 

export function deleteLike(card) {
  return fetch(`${config.baseUrl}/cards/likes/${card._id}`, {
    method: 'DELETE',
    headers: config.headers,
  })
    .then(onResponse)
}

export function editProfileAvatar(body) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify(body)
  })
    .then(onResponse)    
}

