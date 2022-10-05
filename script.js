"use strict";

let service1;
let service2;
let allServicePrices;
let fullPrice;
let title;
let servicePercentPrice;
let screens;
let screenPrice;
let adaptive;


let rollback = 24;


const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
}

const asking = function () {
    title = prompt("Как называется ваш проект?", " авто Лидер");
    screens = prompt("Какие типы экранов нужно разработать?", 'Простые, Сложные, Интерактивные');
    screenPrice = prompt("Сколько будет стоить данная работа?", 12000);

    while (!isNumber(screenPrice)) {
        alert("Вы ввели не число");
        screenPrice = prompt("Сколько будет стоить данная работа?", 12000);
    }

    adaptive = confirm("Нужен ли адаптив на сайте? (Ок - да, отмена - нет)");
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
    switch (true) {
        case price >= 3000:
            return "Даём скидку 10%";

        case price >= 1500:
            return "Даём скидку 5%";

        case price > 0:
            return "Скидка не предусмотрена";

        default:
            return "Something wrong";
    }
}

const getAllServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?", "SEO продвижениеу");
        }
        if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?", "SEO продвижениеу");
        }
        sum += +prompt("Сколько это будет стоить?", 6000);
    }
    return sum;
}

function getFullPrice(price, servPrices) {
    return +price + +servPrices;
}

const getTitle = function (name) {
    let nameTrans = name
        .trim()
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    return nameTrans;
}

const getServicePercentPrices = function (price, roll) {
    return price - price * (roll / 100);
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
title = getTitle(title);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);


showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log((screens.toLowerCase()).split(", "));
console.log(getRollbackMessage(fullPrice));
console.log("Итоговая стоимость за вычетом отката посреднику: " + Math.ceil(servicePercentPrice) + " рублей");