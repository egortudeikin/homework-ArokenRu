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
  isEmpty: (obj) => {
    if(obj in person2) {
      return false;
    } else {
      return true;
    }
  }
};

person2.isEmpty(name);
// person2.isEmpty(work); Не работает (выдаёт ошибку "work is not defined")

// Задача 3
const task = {
  title: "Описание товара",
  description: "Товар товар товар",
  isCompleted: true,
}

const cloneAndModify = (object, modifications) => {
  object = {...task};
  object.title = modifications;

  return object;
}

cloneAndModify(task2, "Характеристики товара");

for (const key in task2) {
  console.log(task2.key);
}

// Задача 4
