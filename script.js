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

console.log(" Тип данных переменной title: " + typeof title + "\n", "Тип данных переменной fullPrice: " + typeof fullPrice + "\n", "Тип данных переменной adaptive: " + typeof adaptive);
console.log(" Длина строки из переменной screens: " + screens.length);
console.log(" Стоимость верстки экранов: " + screenPrice + " рублей\n Стоимость разработки сайта: " + fullPrice + " рублей");
console.log((screens.toLowerCase()).split(", "));
console.log("Процент отката посреднику за работу: " + fullPrice * (rollback / 100) + " рублей");
console.log("Итоговая стоимость за вычетом отката посреднику: " + Math.ceil(servicePercentPrice) + " рублей");

switch (true) {
    case fullPrice >= 3000:
        console.log("Даём скидку в 10%");
        break;

    case fullPrice >= 1500:
        console.log("Даём скидку в 5%");
        break;

    case fullPrice > 0:
        console.log("Скидка не предусмотрена");
        break;

    default:
        console.log("Something wrong");
        break;
}