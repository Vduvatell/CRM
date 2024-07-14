// Первая доп задача


const tax = prompt("Введите ваш заработок");

if (tax <= 15000) {
  console.log(tax * 0.13);
}

if (tax > 15000 && tax < 50000) {
  console.log(tax * 0.2);
}

if (tax >= 50000) {
  console.log(tax * 0.3);
}

if (isNaN(tax)) {
  console.log("Вы ввели некоректные данные");
}