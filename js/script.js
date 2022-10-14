"use strict";

const title = document.getElementsByTagName("h1")[0];
const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];
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
const screens = document.querySelectorAll("div.screen");


const appData = {
    servicesPercent: {},
    servicesNumber: {},
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    title: "",
    servicePercentPrice: 0,
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 24,

    init: function () {
        appData.addTitle();
        startBtn.addEventListener('click', appData.start);
        buttonPluse.addEventListener('click', appData.addScreenBlock);
    },

    start: function () {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();

        // appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        // appData.logger(appData);

        appData.showResult();
    },

    showResult: function () {
        total.value = appData.screenPrice;
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        totalFullCount.value = appData.fullPrice;
    },

    addTitle: function () {
        document.title = title.textContent;
    },

    addScreens: function () {
        const screens = document.querySelectorAll("div.screen");

        screens.forEach(function (screen, index) {

            const select = screen.querySelector("select");
            const input = screen.querySelector("input");
            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            });
        });
    },

    addScreenBlock: function () {
        const screens = document.querySelectorAll("div.screen");
        const cloneScreen = screens[0].cloneNode(true);

        screens[screens.length - 1].after(cloneScreen);
    },
    addServices: function () {

        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector("input[type=checkbox]");
            const label = item.querySelector("label");
            const input = item.querySelector("input[type=text]");

            if (check.checked) appData.servicesPercent[label.textContent] = +input.value;
        });

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector("input[type=checkbox]");
            const label = item.querySelector("label");
            const input = item.querySelector("input[type=text]");

            if (check.checked) appData.servicesNumber[label.textContent] = +input.value;
        });
    },

    addPrices: function () {
        appData.screenPrice = appData.screens.reduce(function (sum, screen) {
            return sum += +screen.price;
        }, 0);

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }

        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
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

    getServicePercentPrices: function (price, roll) {
        appData.servicePercentPrice = price - price * (roll / 100);
    },

    logger: function (obj) {
        for (let key in obj) {
            console.log("Свойство/метод: " + key);
        }
    }
};


appData.init();