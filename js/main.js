!function(){"use strict";(()=>{const e=document.querySelector(".main-header"),t=document.querySelectorAll(".main-nav__title");let a=localStorage.getItem("menuItemsShow")||[],n=0,s=0;const c=(e,t)=>{const n=t.currentTarget.parentElement,s=t.currentTarget.querySelector(".main-nav__toggle");a=JSON.parse(localStorage.getItem("menuItemsShow"))||[],n.classList.contains("main-nav__item--close")?(n.classList.remove("main-nav__item--close"),a.push(e),s.setAttribute("aria-expanded","true")):(n.classList.add("main-nav__item--close"),a=a.filter((t=>t!==e)),s.setAttribute("aria-expanded","false")),localStorage.setItem("menuItemsShow",JSON.stringify(a))};t.forEach(((e,t)=>{((e,t)=>{a=JSON.parse(localStorage.getItem("menuItemsShow"))||[],a.forEach((a=>{a===t&&e.parentElement.classList.remove("main-nav__item--close")}))})(e,t),e.addEventListener("click",c.bind(null,t))})),document.addEventListener("touchstart",(e=>{n=e.changedTouches[0].clientX})),document.addEventListener("touchend",(t=>{s=t.changedTouches[0].clientX,s<n&&e.classList.remove("main-header--show"),n<30&&s>n&&e.classList.add("main-header--show")}))})()}();