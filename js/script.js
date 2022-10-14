// "use strict";

// const title = document.getElementsByTagName("h1")[0];
// const startBtn = document.getElementsByClassName("handler_btn")[0];
// const resetBtn = document.getElementsByClassName("handler_btn")[1];
// const buttonPluse = document.querySelector(".screen-btn");
// const otherItemsPercent = document.querySelectorAll(".other-items.percent");
// const otherItemsNumber = document.querySelectorAll(".other-items.number");
// const inputRange = document.querySelector(".rollback  input[type=range]");
// const spanRange = document.querySelector(".rollback  span.range-value");
// const total = document.getElementsByClassName('total-input')[0];
// const totalCount = document.getElementsByClassName('total-input')[1];
// const totalCountOther = document.getElementsByClassName('total-input')[2];
// const totalFullCount = document.getElementsByClassName('total-input')[3];
// const totalCountRollback = document.getElementsByClassName('total-input')[4];
// const screens = document.querySelectorAll(".screen");
// let flag = false;
// let correct = true;



// const appData = {
//     servicesPercent: {},
//     servicesNumber: {},
//     servicePricesPercent: 0,
//     servicePricesNumber: 0,
//     fullPrice: 0,
//     title: "",
//     servicePercentPrice: 0,
//     screens: [],
//     screenPrice: 0,
//     rollback: 0,
//     screenCount: 0,

//     newCalc: function () {
//         appData.servicePercentPrice = 0;
//         appData.screenPrice = 0;
//         appData.fullPrice = 0;
//         appData.servicesPercent = {};
//         appData.servicesNumber = {};
//         appData.servicePricesPercent = 0;
//         appData.servicePricesNumber = 0;
//         appData.screens = [];
//         appData.screenCount = 0;
//     },

//     init: function () {
//         console.log("Функция вызвана");
//         if (!correct) alert("Вы ввели не все данные");
//         appData.newCalc();
//         console.log(appData);
//         appData.addTitle();
//         inputRange.addEventListener('input', appData.spanChange);
//         startBtn.addEventListener('click', appData.start);
//         buttonPluse.addEventListener('click', appData.addScreenBlock);
//     },

//     start: function () {
//         console.log("Функция вызвана");
//         flag = true;
//         appData.addScreens();
//         appData.addServices();
//         appData.addPrices();

//         // appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
//         // appData.logger(appData);

//         appData.showResult();
//     },


//     showResult: function () {
//         total.value = appData.screenPrice;
//         totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
//         totalFullCount.value = appData.fullPrice;
//         totalCountRollback.value = appData.servicePercentPrice;
//         totalCount.value = appData.screenCount;
//     },

//     addTitle: function () {
//         document.title = title.textContent;
//     },

//     spanChange: function () {
//         spanRange.textContent = `${inputRange.value}%`;
//         appData.rollback = +inputRange.value;
//         console.log(appData.rollback);
//         if (flag === true) appData.showResult();
//     },

//     addScreens: function () {
//         screens.forEach(function (screen, index) {

//             const select = screen.querySelector("select");
//             const input = screen.querySelector("input");
//             const selectName = select.options[select.selectedIndex].textContent;

//             if (selectName === "Тип экранов" || input.value === "") {
//                 correct = false;
//                 appData.init();
//             }

//             appData.screens.push({
//                 id: index,
//                 name: selectName,
//                 count: input.value,
//                 price: +select.value * +input.value
//             });

//         });
//     },

//     addScreenBlock: function () {
//         const screens = document.querySelectorAll("div.screen");
//         const cloneScreen = screens[0].cloneNode(true);
//         console.dir(cloneScreen.childNodes[3].childNodes[1].value = "");
//         screens[screens.length - 1].after(cloneScreen);
//     },

//     addServices: function () {

//         otherItemsPercent.forEach(function (item) {
//             const check = item.querySelector("input[type=checkbox]");
//             const label = item.querySelector("label");
//             const input = item.querySelector("input[type=text]");

//             if (check.checked) appData.servicesPercent[label.textContent] = +input.value;
//         });

//         otherItemsNumber.forEach(function (item) {
//             const check = item.querySelector("input[type=checkbox]");
//             const label = item.querySelector("label");
//             const input = item.querySelector("input[type=text]");

//             if (check.checked) appData.servicesNumber[label.textContent] = +input.value;
//         });
//     },

//     addPrices: function () {
//         appData.screenPrice = appData.screens.reduce(function (sum, screen) {
//             return sum += +screen.price;
//         }, 0);

//         for (let key in appData.servicesNumber) {
//             appData.servicePricesNumber += appData.servicesNumber[key];
//         }

//         for (let key in appData.servicesPercent) {
//             appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
//         }

//         appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

//         appData.servicePercentPrice = appData.fullPrice - Math.ceil((appData.fullPrice * (appData.rollback / 100)));

//         appData.screenCount = appData.screens.reduce(function (sum, screen) {
//             return sum += +screen.count;
//         }, 0);
//     },

//     logger: function (obj) {
//         for (let key in obj) {
//             console.log("Свойство/метод: " + key);
//         }
//     },

// };


// appData.init();

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
const screens = document.querySelectorAll(".screen");
let flag = false;



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
    rollback: 0,
    screenCount: 0,

    newCalc: function () {
        appData.servicePercentPrice = 0;
        appData.screenPrice = 0;
        appData.fullPrice = 0;
        appData.servicesPercent = {};
        appData.servicesNumber = {};
        appData.servicePricesPercent = 0;
        appData.servicePricesNumber = 0;
        appData.screens = [];
        appData.screenCount = 0;
    },

    init: function () {
        appData.addTitle();
        inputRange.addEventListener('input', appData.spanChange);
        startBtn.addEventListener('click', appData.start);
        buttonPluse.addEventListener('click', appData.addScreenBlock);
    },

    start: function () {
        flag = true;
        appData.newCalc();
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
        totalCountRollback.value = appData.servicePercentPrice;
        totalCount.value = appData.screenCount;
    },

    addTitle: function () {
        document.title = title.textContent;
    },

    spanChange: function () {
        spanRange.textContent = `${inputRange.value}%`;
        appData.rollback = +inputRange.value;
        if (flag === true) {
            appData.servicePercentPrice = appData.fullPrice - Math.ceil((appData.fullPrice * (appData.rollback / 100)));
            appData.showResult();
        }
    },

    addScreens: function () {
        const screens = document.querySelectorAll(".screen");

        screens.forEach(function (screen, index) {

            const select = screen.querySelector("select");
            const input = screen.querySelector("input");
            const selectName = select.options[select.selectedIndex].textContent;

            if (selectName !== "Тип экранов" || input.value !== "") {

                appData.screens.push({
                    id: index,
                    name: selectName,
                    count: input.value,
                    price: +select.value * +input.value
                });
            }
        });

        const screensArr = Array.from(screens);

        if (screensArr.some(function (screen) {
                const select = screen.querySelector("select");
                const input = screen.querySelector("input");
                const selectName = select.options[select.selectedIndex].textContent;

                return selectName === "Тип экранов" || input.value === "";
            })) alert("Вы не ввели данные");
    },

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        cloneScreen.childNodes[3].childNodes[1].value = "";
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

        appData.servicePercentPrice = appData.fullPrice - Math.ceil((appData.fullPrice * (appData.rollback / 100)));

        appData.screenCount = appData.screens.reduce(function (sum, screen) {
            return sum += +screen.count;
        }, 0);
    },

    logger: function (obj) {
        for (let key in obj) {
            console.log("Свойство/метод: " + key);
        }
    },

};


appData.init();