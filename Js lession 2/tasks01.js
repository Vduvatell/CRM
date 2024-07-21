let money = prompt("Введите сумму покупки");

const convert = x => {
  let result = x;

  result *= 1.2;

  result *= 73;

  return result;
}

console.log(convert(money));