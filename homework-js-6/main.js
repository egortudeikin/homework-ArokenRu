// Задание 1
const users = [
  {
    name: "Alex",
    age: 24,
    isAdmin: false,
  },
  {
    name: "Bob",
    age: 13,
    isAdmin: false,
  },
  {
    name: "John",
    age: 31,
    isAdmin: true,
  },
  {
    name: "Jane",
    age: 20,
    isAdmin: false,
  },
];

users.push(
  {
    name: "Ann",
    age: 19,
    isAdmin: false,
  },
  {
    name: "Jack",
    age: 43,
    isAdmin: true,
  },
);

console.log(users)

// Задание 2
const getUserAverageAge = (array) => {
  sum = 0;
  quantity = array.length;

  for (let i = 0; i < array.length; i++) {
    sum += array[i].age;
  }

  average = sum / quantity;

  return average;
}

console.log(getUserAverageAge(users));

// Задание 3
const getAllAdmins = (array) => {
  const admins = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].isAdmin === true) {
      admins.push(array[i]);
    }
  }

  console.log(admins);
}

getAllAdmins(users);

// Задание 4
const first = (arr, n) => {
  if (n == undefined) {
    console.log(arr);
  } else if (n == 0) {
    console.log([]);
  } else {
    console.log(arr[0]);
  }
}

first([1, 2, 3, 4], 2);
first([1, 2, 3, 4], 0);
first([1, 2, 3, 4]);