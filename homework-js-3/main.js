// Задача 1
for (let i = 1; i >= 1 && i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }

  console.log(i);
}

// Задача 2
const j = +prompt("Введите число", "");
let k = 1;
for (let z = 1; z <= j; z++) {
  k *= z;
}

console.log(k);
