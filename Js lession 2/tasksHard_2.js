// Вторая доп задача


const tax2 = prompt("Введите ваш заработок");



if (!isNaN(tax2) && tax2 <= 15000) {
  console.log(tax2 * 0.13);
} else if (!isNaN(tax2) && tax2 < 50000) {
  console.log((15000 * 0.13) + ((tax2 - 15000) * 0.2));
} else if (!isNaN(tax2) && tax2 >= 50000) {
  console.log((15000 * 0.13) + (35000 * 0.2) + ((tax2 - 50000) * 0.3));
} else {
  console.log("Вы ввели некоректные данные");
}