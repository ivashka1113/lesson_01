const title = "Lesson_2";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 12000;
let rollback = 24;
let fullPrice = 25000;
const adaptive = false;

console.log(" Тип данных переменной title: " + typeof title + "\n", "Тип данных переменной fullPrice: " + typeof fullPrice + "\n", "Тип данных переменной adaptive: " + typeof adaptive);
console.log(" Длина строки из переменной screens: " + screens.length);
console.log(" Стоимость верстки экранов: " + screenPrice + " рублей\n Стоимость разработки сайта: " + fullPrice + " рублей");
console.log((screens.toLowerCase()).split(", "));
console.log("Процент отката посреднику за работу: " + fullPrice * (rollback / 100) + " рублей");