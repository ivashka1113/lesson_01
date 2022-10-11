"use strict";


const titleProject = document.getElementsByTagName("h1")[0];
const buttonResult = document.getElementsByClassName("handler_btn")[0];
const buttonReset = document.getElementsByClassName("handler_btn")[1];
const buttonPluse = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");
const inputRange = document.querySelector(".rollback  input[type=range]");
const spanRange = document.querySelector(".rollback  span.range-value");
const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const totalFullCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];
let screenDiv = document.querySelectorAll("div.screen");


const appData = {
    services: {},
    allServicePrices: 0,
    fullPrice: 0,
    title: "",
    servicePercentPrice: 0,
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 24,

    asking: function () {
        do {
            appData.title = prompt("Как называется ваш проект?", " авто Лидер");
        } while (appData.isNumber(appData.title));
        appData.adaptive = confirm("Нужен ли адаптив на сайте? (Ок - да, отмена - нет)");

        for (let i = 0; i < 2; i++) {

            let name;
            let price;

            do {
                name = prompt("Какие типы экранов нужно разработать?", 'Простые, Сложные, Интерактивные');
            } while (appData.isNumber(name));


            do {
                price = prompt("Сколько будет стоить данная работа?", 6000);
            }
            while (!appData.isNumber(price));
            appData.screens.push({
                id: i,
                name: name,
                price: price
            });
        }



        for (let i = 0; i < 2; i++) {
            let servicePrice;
            let name;
            do {
                name = prompt("Какой дополнительный тип услуги нужен?", "SEO продвижение");
            } while (appData.isNumber(name));

            do {
                servicePrice = prompt("Сколько это будет стоить?", 6000);
            } while (!appData.isNumber(servicePrice));

            name = name + "_";

            if (i.toString().length === 1) {
                name = name + "00" + i;
            } else if (i.toString().length === 2) {
                name = name + "0" + i;
            } else {
                name = name + i;
            }

            appData.services[name] = +servicePrice;
        }

    },

    addPrices: function () {

        appData.screenPrice = appData.screens.reduce(function (sum, screen) {
            return sum += +screen.price;
        }, 0);

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num) && !/\s/g.test(num);
    },

    getRollbackMessage: function (price) {
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
    },

    getFullPrice: function (price, servPrices) {
        appData.fullPrice = price + servPrices;
    },

    getTitle: function (name) {
        let nameTrans = name
            .trim()
            .split(/\s+/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        appData.title = nameTrans;
    },

    getServicePercentPrices: function (price, roll) {
        appData.servicePercentPrice = price - price * (roll / 100);
    },

    logger: function (obj) {
        for (let key in obj) {
            console.log("Свойство/метод: " + key);
        }
    },

    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.getTitle(appData.title);
        appData.getServicePercentPrices(appData.fullPrice, appData.rollback);

        appData.logger(appData);
    }

}


appData.start();

console.log(appData.servicePercentPrice);
console.log(appData.screens);
console.log(appData.services);