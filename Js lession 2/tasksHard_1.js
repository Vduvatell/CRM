// Первая доп задача


const tax = prompt("Введите ваш заработок");

if (!isNaN(tax) && tax <= 15000) {
  console.log(tax * 0.13);
} else if (!isNaN(tax) && tax < 50000) {
  console.log(tax * 0.2);
} else if (!isNaN(tax) && tax >= 50000) {
  console.log(tax * 0.3);
} else {
  console.log("Вы ввели некоректные данные");
}