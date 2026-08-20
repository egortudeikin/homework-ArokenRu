// Задача 1
const person = {
  name: "Егор",
  age: 18,
  isStudent: true,
};

console.log(person.name);
console.log(person["age"]);
console.log(person.isStudent);

// Задача 2
const person2 = {
  name: "Егор",
  age: 18,
  isStudent: true,
};

const test = {};

const isEmpty = (obj) => {
  for (const key in obj) {
    return false;
  }
  return true;
};

console.log(isEmpty(person2));
console.log(isEmpty(test));

// Задача 3
const task = {
  title: "Описание товара",
  description: "Товар товар товар",
  isCompleted: true,
}

const cloneAndModify = (object, modifications) => {
  return { ...object, ...modifications };
};

const task2 = cloneAndModify(task, { title: "Характеристики товара", description: "Характеристики", isCompleted: false, });

for (const key in task) {
  console.log(`${key}:`, task[key]);
}

for (const key in task2) {
  console.log(`${key}:`, task2[key]);
}

// Задача 4
function callAllMethods(object) {
  for (const key in object) {
    if (typeof object[key] === "function") {
      object[key]();
    }
  }
}

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

callAllMethods(myObject);