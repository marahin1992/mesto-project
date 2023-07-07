(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{bj:()=>g,O9:()=>b,Fg:()=>s,wK:()=>d,Hf:()=>p,jS:()=>k,wk:()=>S,ED:()=>v,rC:()=>f,o:()=>j});var t=function(e,t){e.disabled=!0,e.classList.add(t.inactiveButtonClass)},r=function(e,t,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r.inputErrorClass),o.classList.remove(r.errorClass),o.textContent=""},o=function(e,r,o){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?function(e,t){e.disabled=!1,e.classList.remove(t.inactiveButtonClass)}(r,o):t(r,o)};function n(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close-button"))&&u(e.target.closest(".popup"))}function c(e){"Escape"===e.key&&u(document.querySelector(".popup_opened"))}function i(e){e.classList.add("popup_opened"),e.addEventListener("click",n),document.addEventListener("keydown",c)}function u(e){e.removeEventListener("click",n),e.classList.remove("popup_opened"),document.removeEventListener("keydown",c)}function a(e){var t=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),r=t.querySelector(".card__image");return r.src=e.link,t.querySelector(".card__title").textContent=e.name,r.alt="Фотография "+e.name,t.querySelector(".card__like").addEventListener("click",(function(e){e.target.classList.toggle("card__like_liked")})),t.querySelector(".card__delete").addEventListener("click",(function(e){e.target.closest(".card").remove()})),r.addEventListener("click",(function(){var t;t=e,s.src=t.link,d.textContent=t.name,s.alt="Фотография "+t.name,i(p)})),t}var l,p=document.querySelector(".popup_type_image"),s=p.querySelector(".popup__image"),d=p.querySelector(".popup__image-title"),m=(p.querySelector(".popup__close-button"),document.querySelector(".profile")),_=m.querySelector(".profile__edit-button"),f=m.querySelector(".profile__name"),v=m.querySelector(".profile__status"),y=m.querySelector(".profile__add-button"),S=document.querySelector(".popup_type_profile"),q=(S.querySelector(".popup__close-button"),document.forms["profile-form"]),b=q.querySelector('input[name="profilename"]'),g=q.querySelector('input[name="profilejob"]'),k=document.querySelector(".popup_type_mesto"),L=(k.querySelector(".popup__close-button"),document.forms["card-form"]),E=L.querySelector('input[name="cardname"]'),C=L.querySelector('input[name="cardlink"]'),h=document.querySelector(".cards"),j={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};_.addEventListener("click",(function(){b.value=f.textContent,g.value=v.textContent,r(S.querySelector(".popup__form"),b,j),r(S.querySelector(".popup__form"),g,j),i(S)})),y.addEventListener("click",(function(){i(k)})),q.addEventListener("submit",(function(e){e.preventDefault(),f.textContent=b.value,v.textContent=g.value,u(S),e.target.reset()})),[{name:"Разветье",link:"https://i.ibb.co/Vxg4hrX/1.jpg"},{name:"Железногорское водохранилище",link:"https://i.ibb.co/MMMP30f/2.jpg"},{name:"Берёзовая улица",link:"https://i.ibb.co/W0TcfsB/3.jpg"},{name:"Ледяной холм",link:"https://i.ibb.co/Kz4Sr64/4.jpg"},{name:"Урочище Роза",link:"https://i.ibb.co/pXpyFFq/5.jpg"},{name:"Карманово",link:"https://i.ibb.co/dWZzGxZ/6.jpg"}].forEach((function(e){h.append(a(e))})),L.addEventListener("submit",(function(e){e.preventDefault();var t={name:E.value,link:C.value};h.prepend(a(t)),u(k),e.target.reset()})),l=j,Array.from(document.querySelectorAll(l.formSelector)).forEach((function(e){!function(e,n){var c=Array.from(e.querySelectorAll(n.inputSelector)),i=e.querySelector(n.submitButtonSelector);o(c,i,n),e.addEventListener("reset",(function(){t(i,n)})),c.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,o){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?r(e,t,o):function(e,t,r,o){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),n.textContent=r,n.classList.add(o.errorClass)}(e,t,t.validationMessage,o)}(e,t,n),o(c,i,n)}))}))}(e,l)}))})();