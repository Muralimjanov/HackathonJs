'use strict';

let bd = document.querySelector('body')
let head = document.querySelector('header')
let nav = document.querySelector('nav')
let nav_bar = document.querySelector('.nav__bar')
let fb_img = document.querySelectorAll('.fb_img')
let sec_o_img = document.querySelectorAll('.sec_o_img')
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let next1 = document.querySelector('.next1');
let prev1 = document.querySelector('.prev1');
let up = document.querySelector('.up')
let btn = document.querySelectorAll('.btn')
let modal = document.querySelector('.modal')
let modal__close = document.querySelector('.modal__close')
let i = 0;

up.style.display = 'none'

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    if (scroll > 200) {
        nav.style.background = 'linear-gradient(rgba(194, 191, 10, 0.377)0%,rgba(208, 255, 0, 0.506)100%)'
        up.style.display = 'block'
    } else {
        nav.style.background = 'none'
        up.style.display = 'none'
    }
})


for (let i = 0; i < fb_img.length; i++) {
    fb_img[i].style.display = 'none'
}
fb_img[0].style.display = 'block'


next.addEventListener('click', () => {
    if (i < 2) {
        fb_img[i].style.display = 'none'
        i++;
        fb_img[i].style.display = 'block'
    } else {
        fb_img[i].style.display = 'none'
        i = 0;
        fb_img[i].style.display = 'block'
    }
})  

prev.addEventListener('click', () => {
    if (i > 0) {
        fb_img[i].style.display = 'none'
        i--;
        fb_img[i].style.display = 'block'
    } else {
        fb_img[i].style.display = 'none'
        i = 2;
        fb_img[i].style.display = 'block'
    }
})

for (let i = 0; i < sec_o_img.length; i++) {
    sec_o_img[i].style.display = 'none'
}
sec_o_img[0].style.display = 'block'


next1.addEventListener('click', () => {
    if (i < 2) {
        sec_o_img[i].style.display = 'none'
        i++;
        sec_o_img[i].style.display = 'block'
    } else {
        sec_o_img[i].style.display = 'none'
        i = 0;
        sec_o_img[i].style.display = 'block'
    }
})
prev1.addEventListener('click', () => {
    if (i > 0) {
        sec_o_img[i].style.display = 'none'
        i--;
        sec_o_img[i].style.display = 'block'
    } else {
        sec_o_img[i].style.display = 'none'
        i = 2;
        sec_o_img[i].style.display = 'block'
    }
})

btn[0].addEventListener('click', () => {
    modal.style.display = 'block'
})

btn[1].addEventListener('click', () => {
    modal.style.display = 'block'
})

modal__close.addEventListener('click', () => {
    modal.style.display = 'none'
})

let TOKEN = "6413003718:AAGkE6HYxbPhsJ7VntBc1UEB2dX8YJFJtUY";
let CHAT_ID = "2139619771";
let URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("tg").addEventListener("submit", function (e) {
    e.preventDefault()
    let message=`<b>Заявка с сайта!</b>\n`
    message += `<b>Отправител:</b> ${this.name.value}\n`
    message += `<b>Номер:</b> ${this.phone.value}`
    axios.post(URL_API,{
        chat_id:CHAT_ID,
        parse_mode:"html",
        text:message
    }).then((res)=>{
        this.name.value=""
        this.phone.value=""
    }).catch((err)=>{
        console.log(err)
    }).finally(()=>console.log("successfully"))
});