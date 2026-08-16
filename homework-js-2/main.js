// Задача 1
const number = +prompt("Напишите число", "");

if (number % 2 == 0) {
  console.log("Число четное")
}
else {
  console.log("Число нечетное")
}

// Задача 2
const age = +prompt("Введите свой возраст", "");
const discount = age < 18 ? 10 : age > 65 ? 30 : 20;
console.log(`Скидка ${discount}%`)

// Задача 3
const username = prompt("Введите имя пользователя", "");
const password = prompt("Введите пароль", "");

if ((username === "admin" || username === "user") && password === "123456") {
  console.log("Доступ разрешен")
} else {
  console.log("Доступ запрещен")
}

// Задача 4
const weight = +prompt("Введите вес посылки (в килограммах)", "");
const delivery = prompt("Введите тип доставки. Допустимые варианты: 'Стандарт', 'Экспресс', 'Премиум'", "");

if (weight <= 0) {
  console.log("Некорректный вес посылки")
}

switch (delivery) {
  case delivery !== "Стандарт":
    console.log("Неверный тип доставки");
    break;
  case delivery !== "Экспресс":
    console.log("Неверный тип доставки");
    break;
  case delivery !== "Премиум":
    console.log("Неверный тип доставки");
    break;
}

const baseCost = weight < 1 ? 5 : weight > 5 ? 15 : 10;
console.log(`Базовая стоимость - ${baseCost}$`)

let rate;

switch (delivery) {
  case delivery === "Стандарт":
    rate = 1;
    break;
  case delivery === "Экспресс":
    rate = 1.5;
    break;
  case delivery === "Премиум":
    rate = 2;
    break;
}

const finalCost = baseCost * rate;
alert(`Итоговая стоимость доставки - ${finalCost}$`);