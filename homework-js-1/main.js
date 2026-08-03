const firstName = "Егор";
const lastName = "Тудейкин";
const isStudent = true;

const age = 19;
const currentYear = 2026;
let birthYear;
birthYear = currentYear - age;

let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e; // 123456789falsetrue

console.log(
  "Меня зовут " +
    firstName +
    " " +
    lastName +
    ", мне " +
    age +
    " лет. Я ученик курса: " +
    isStudent,
);
console.log(result);
