// Задача 1
function calculateFinalPrice(baseCost, discount, tax) {
  let discountPrice = baseCost - (baseCost * (discount / 100))
  let texPrice = discountPrice * tax;
  return discountPrice + texPrice;
}

console.log(calculateFinalPrice(120, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));

// Задача 2
const checkAccess = (name, password) => {
  if (name === "admin" && password === "123456") {
    return "Доступ разрешен";
  } else {
    return "Доступ запрещен";
  }
}

const name = prompt("Введите имя пользователя", "");
const password = prompt("Введите пароль", "");

console.log(checkAccess(name, password));

// Задача 3
const getTimeOfDay = time => {
  if (time >= 0 && time <= 5) {
    return "Ночь"
  } else if (time >= 6 && time <= 11) {
    return "Утро"
  } else if (time >= 12 && time <= 17) {
    return "День"
  } else if (time >= 18 && time <= 23) {
    return "Вечер"
  } else {
    return "Некорректное время";
  }
}

const time = +prompt("Введите время", "");

console.log(getTimeOfDay(time));

// Задача 4
const findFirstEven = (start, end) => {
  for (start; start <= end; start++) {
    if (start % 2 === 0) {
      return start;
      break;
    } else {
      return "Четных чисел нет"
    }
  }
}

console.log(findFirstEven(1, 10));
console.log(findFirstEven(9, 9));