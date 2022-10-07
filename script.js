"use strict";


const appData = {
    service1: "",
    service2: "",
    allServicePrices: 0,
    fullPrice: 0,
    title: "",
    servicePercentPrice: 0,
    screens: "",
    screenPrice: 0,
    adaptive: true,
    rollback: 24,

    asking: function () {
        appData.title = prompt("Как называется ваш проект?", " авто Лидер");
        appData.screens = prompt("Какие типы экранов нужно разработать?", 'Простые, Сложные, Интерактивные');

        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?", 12000);
        } while (!appData.isNumber(appData.screenPrice));
        appData.screenPrice = +appData.screenPrice;
        appData.adaptive = confirm("Нужен ли адаптив на сайте? (Ок - да, отмена - нет)");
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

    getAllServicePrices: function () {

        let sum = 0;
        let servicePrice;

        for (let i = 0; i < 2; i++) {

            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "SEO продвижение");
            }
            if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "SEO продвижение");
            }

            do {
                servicePrice = prompt("Сколько это будет стоить?", 6000);
            }
            while (!appData.isNumber(servicePrice));
            servicePrice = +servicePrice;
            sum += servicePrice;
        }

        return sum;
    },

    getFullPrice: function (price, servPrices) {
        return price + servPrices;
    },

    getTitle: function (name) {
        let nameTrans = name
            .trim()
            .split(/\s+/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        return nameTrans;
    },

    getServicePercentPrices: function (price, roll) {
        return price - price * (roll / 100);
    },

    logger: function (obj) {
        for (let key in obj) {
            console.log("Свойство/метод: " + key);
        }
    },

    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.title = appData.getTitle(appData.title);
        appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        appData.logger(appData);
    }

}


appData.start();


// console.log(appData.servicePercentPrice);
// console.log(appData.fullPrice);