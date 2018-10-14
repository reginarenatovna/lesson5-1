'use strict';		
// //Восстановить порядок в меню, добавить пятый пункт
let menu = document.querySelector('.menu'),
		menuItem = document.querySelectorAll('.menu-item');
menu.insertBefore(menuItem[2], menuItem[1]);
let menuItem5 = document.createElement('li');
menuItem5.classList.add('menu-item');
menu.appendChild(menuItem5);
menuItem5.textContent = 'Пятый пункт';
//Заменить картинку заднего фона
document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';
// Поменять заголовок, добавить слово "подлинную"
let title = document.getElementById('title');
title.innerHTML = 'Мы продаем только подлинную технику Apple';
//Удаление рекламы 
let adv = document.querySelector('.adv');
adv.remove();
//Спросить у пользователя отношение к технике apple и записать ответ в блок 
let pr = document.getElementById('prompt'),
		ask = document.createElement('div');
ask.textContent = prompt('Ваше отношение к технике apple?', '');
pr.textContent = "Отношение к технике Apple:";
pr.appendChild(ask);
