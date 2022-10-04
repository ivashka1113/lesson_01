let rollback = 24;

let title = prompt("Как называется ваш проект?", "АвтоЛидер");
let screens = prompt("Какие типы экранов нужно разработать?", 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
let adaptive = confirm("Нужен ли адаптив на сайте? (Ок - да, отмена - нет)");

let service1 = prompt("Какой дополнительный тип услуги нужен?", "SEO продвижение");
let servicePrice1 = +prompt("Сколько это будет стоить?", 6000);
let service2 = prompt("Какой дополнительный тип услуги нужен?", "SEO продвижениеу");
let servicePrice2 = +prompt("Сколько это будет стоить?", 6000);

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);


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


showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);


console.log(" Тип данных переменной title: " + typeof title + "\n", "Тип данных переменной fullPrice: " + typeof fullPrice + "\n", "Тип данных переменной adaptive: " + typeof adaptive);
console.log(" Длина строки из переменной screens: " + screens.length);
console.log(" Стоимость верстки экранов: " + screenPrice + " рублей\n Стоимость разработки сайта: " + fullPrice + " рублей");
console.log((screens.toLowerCase()).split(", "));
console.log("Процент отката посреднику за работу: " + fullPrice * (rollback / 100) + " рублей");
console.log("Итоговая стоимость за вычетом отката посреднику: " + Math.ceil(servicePercentPrice) + " рублей");
console.log(getRollbackMessage(fullPrice));