(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{bj:()=>j,O9:()=>U,Fg:()=>m,wK:()=>_,$q:()=>g,Hf:()=>f,jS:()=>O,wk:()=>C,ED:()=>S,rC:()=>h,o:()=>T});var t=function(e,t){e.disabled=!0,e.classList.add(t.inactiveButtonClass)},r=function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""},n=function(e,r,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?function(e,t){e.disabled=!1,e.classList.remove(t.inactiveButtonClass)}(r,n):t(r,n)};function o(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close-button"))&&i(e.target.closest(".popup"))}function a(e){"Escape"===e.key&&i(document.querySelector(".popup_opened"))}function c(e){e.classList.add("popup_opened"),e.addEventListener("click",o),document.addEventListener("keydown",a)}function i(e){e.removeEventListener("click",o),e.classList.remove("popup_opened"),document.removeEventListener("keydown",a)}var l={baseUrl:"https://nomoreparties.co/v1/plus-cohort-26",headers:{"content-type":"application/json",authorization:"2e13d1ed-4c1c-4aa9-8a4c-82d13ffda241"}};function s(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}function u(e,t){var r=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),n=r.querySelector(".card__image"),o=r.querySelector(".card__like-counter"),a=r.querySelector(".card__delete");return r.dataset.id=e._id,e.owner._id===t&&(a.classList.add("card__delete_enabled"),a.addEventListener("click",(function(t){var r;(r=e,fetch("".concat(l.baseUrl,"/cards/").concat(r._id),{method:"DELETE",headers:l.headers}).then(s)).then(t.target.closest(".card").remove())}))),n.src=e.link,r.querySelector(".card__title").textContent=e.name,n.alt="Фотография "+e.name,o.textContent=e.likes.length,e.likes.some((function(e){return e._id===t}))&&r.querySelector(".card__like").classList.add("card__like_liked"),r.querySelector(".card__like").addEventListener("click",(function(r){var n;e.likes.some((function(e){return e._id===t}))?(n=e,fetch("".concat(l.baseUrl,"/cards/likes/").concat(n._id),{method:"DELETE",headers:l.headers}).then(s)).then((function(t){o.textContent=t.likes.length,e.likes=t.likes,r.target.classList.toggle("card__like_liked")})):function(e){return fetch("".concat(l.baseUrl,"/cards/likes/").concat(e._id),{method:"PUT",headers:l.headers}).then(s)}(e).then((function(t){o.textContent=t.likes.length,e.likes=t.likes,r.target.classList.toggle("card__like_liked")}))})),n.addEventListener("click",(function(){var t;t=e,m.src=t.link,_.textContent=t.name,m.alt="Фотография "+t.name,c(f)})),r}var d,p,f=document.querySelector(".popup_type_image"),m=f.querySelector(".popup__image"),_=f.querySelector(".popup__image-title"),v=(f.querySelector(".popup__close-button"),document.querySelector(".profile")),y=v.querySelector(".profile__edit-button"),h=v.querySelector(".profile__name"),S=v.querySelector(".profile__status"),b=v.querySelector(".profile__avatar"),q=v.querySelector(".profile__avatar-container"),k=v.querySelector(".profile__add-button"),g=document.querySelector(".popup_type_avatar"),E=document.forms["avatar-form"],L=E.querySelector('input[name="avatarlink"]'),C=document.querySelector(".popup_type_profile"),x=(C.querySelector(".popup__close-button"),document.forms["profile-form"]),U=x.querySelector('input[name="profilename"]'),j=x.querySelector('input[name="profilejob"]'),O=document.querySelector(".popup_type_mesto"),P=(O.querySelector(".popup__close-button"),document.forms["card-form"]),w=P.querySelector('input[name="cardname"]'),A=P.querySelector('input[name="cardlink"]'),D=document.querySelector(".cards"),T={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};function B(e){var t=e.formElement,r=e.text,n=e.disabled,o=t.querySelector(".popup__save-button");o.disabled=!!n&&"disabled",o.textContent=r}fetch("".concat(l.baseUrl,"/users/me"),{headers:l.headers}).then(s).then((function(e){return h.textContent=e.name,S.textContent=e.about,b.src=e.avatar,d=e._id})).then((function(e){fetch("".concat(l.baseUrl,"/cards"),{headers:l.headers}).then(s).then((function(t){t.forEach((function(t){D.append(u(t,e))}))}))})),y.addEventListener("click",(function(){U.value=h.textContent,j.value=S.textContent,r(C.querySelector(".popup__form"),U,T),r(C.querySelector(".popup__form"),j,T),c(C)})),k.addEventListener("click",(function(){c(O)})),x.addEventListener("submit",(function(e){var t;e.preventDefault(),B({formElement:e.target,text:"Сохранение...",disabled:!0}),(t={name:U.value,about:j.value},fetch("".concat(l.baseUrl,"/users/me"),{method:"PATCH",headers:l.headers,body:JSON.stringify(t)}).then(s)).then((function(t){h.textContent=t.name,S.textContent=t.about,i(C),e.target.reset()})).catch((function(e){return console.log(e)})).finally((function(){B({formElement:e.target,text:"Сохранить",disabled:!1})}))})),P.addEventListener("submit",(function(e){var t;e.preventDefault(),B({formElement:e.target,text:"Сохранение...",disabled:!0}),(t={name:w.value,link:A.value},fetch("".concat(l.baseUrl,"/cards"),{method:"POST",headers:l.headers,body:JSON.stringify(t)}).then(s)).then((function(t){D.prepend(u(t,d)),i(O),e.target.reset()})).catch((function(e){return console.log(e)})).finally((function(){B({formElement:e.target,text:"Создать",disabled:!1})}))})),q.addEventListener("click",(function(){c(g)})),E.addEventListener("submit",(function(e){var t;e.preventDefault(),B({formElement:e.target,text:"Сохранение...",disabled:!0}),(t={avatar:L.value},fetch("".concat(l.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:l.headers,body:JSON.stringify(t)}).then(s)).then((function(t){b.src=t.avatar,i(g),e.target.reset()})).catch((function(e){return console.log(e)})).finally((function(){B({formElement:e.target,text:"Сохранить",disabled:!1})}))})),p=T,Array.from(document.querySelectorAll(p.formSelector)).forEach((function(e){!function(e,o){var a=Array.from(e.querySelectorAll(o.inputSelector)),c=e.querySelector(o.submitButtonSelector);n(a,c,o),e.addEventListener("reset",(function(){t(c,o)})),a.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?r(e,t,n):function(e,t,r,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)}(e,t,t.validationMessage,n)}(e,t,o),n(a,c,o)}))}))}(e,p)}))})();