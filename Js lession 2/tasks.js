// Вторая задача

const rain = Math.round(Math.random()) === 1 ? "Пошёл дождь. Возьмите зонт!" : "Дождя нет!";

console.log(rain);


//Третья задача


const math = prompt("Введите кол-во баллов по математике:");
const lang = prompt("Введите кол-во баллов по русскому языку:");
const info = prompt("Введите кол-во баллов по информатике");


const res = Number(math) + Number(lang) + Number(info);

console.log("Ваши баллы по математике: " + math);
console.log("Ваши баллы по русскому языку: " + lang);
console.log("Ваши баллы по информатике: " + info);

if (res >= 265) {
  console.log("Поздравляю, вы поступили на бюджет!");
} else if (res > 0 && res < 265) {
  console.log("К сожалению вы не прошли по баллам");
} else {
  console.log("Вы ввели некорректные данные");
}


// Четвертая задача


const value = prompt("Сколько денег вы хотите снять?")

if (value > 0 && value % 100 === 0) {
  console.log("Выдаём деньги");
} else {
  console.log("Вы не можете снять такую сумму");
}