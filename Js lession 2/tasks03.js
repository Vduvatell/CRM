// const sumOfBasket = prompt("Общая сумма корзины");
// const quantityOfBasket = prompt("Количество товаров в корзине");
// const promo = prompt("Промокод");


// // Первая скидка(если товаров больше 10 и сумма меньше 30 000)
// let firstDiscountOne = sumOfBasket * 0.03;
// let firstDiscountTwo = sumOfBasket - firstDiscountOne;

// //Вторая скидка(если корзина меньше 10 товаров и сумма больше или равна 30 000)
// let residualAmount = sumOfBasket - 30000;
// let residualAmountPercent = residualAmount * 0.15;
// let residualAmountResult = sumOfBasket - residualAmountPercent

// //Вторая скидка(если корзина больше 10 товаров и сумма больше и равно 30 000)
// let test = firstDiscountTwo * 0.15;
// let test2 = sumOfBasket - test;

// //Третья скидка промокод
// let test3 = sumOfBasket * 0.1;
// let test4 = sumOfBasket - test3;

// //Третья скидка промокод(если товаров меньше 10 и сумма больше 30 000)
// let test5 = residualAmountResult * 0.1;
// let test6 = sumOfBasket - test5 - residualAmountPercent;

// //Третья скидка промокод(если товаров больше 10 и сумма больше 30 000)
// let test7 = test6 * 0.03;
// let test8 = test6 - test7;

// //Третья скидка промокод(если товаров больше 10 и сумма меньше 30 000)
// let test9 = firstDiscountTwo * 0.1;
// let test10 = sumOfBasket - test9;


// const calculate = (sum, quantity, code) => {
//   if (quantity < 10 && sum < 30000 && code != "METHED" && code != "G3H2Z1") {
//     return sum;
//   }
//   if (quantity >= 10 && sum < 30000 && code != "METHED" && code != "G3H2Z1") {
//     return firstDiscountTwo;
//   }
//   if (quantity < 10 && sum >= 30000 && code != "METHED" && code != "G3H2Z1") {
//     return residualAmountResult;
//   }
//   if (quantity >= 10 && sum >= 30000 && code != "METHED" && code != "G3H2Z1") {
//     return test2;
//   }
//   if (quantity < 10 && sum < 30000 && code === "METHED" && code != "G3H2Z1") {
//     return test4;
//   }
//   if (quantity < 10 && sum >= 30000 && code === "METHED" && code != "G3H2Z1") {
//     return sum;
//   }
//   if (quantity < 10 && sum < 30000 && code === "METHED" && code != "G3H2Z1") {
//     return test6;
//   }
//   if (quantity >= 10 && sum >= 30000 && code === "METHED" && code != "G3H2Z1") {
//     return test8;
//   }
//   if (quantity >= 10 && sum < 30000 && code === "METHED" && code != "G3H2Z1") {
//     return test10;
//   }
// }

// console.log(calculate(sumOfBasket, quantityOfBasket, promo));


const sumOfBasket = prompt("Общая сумма корзины");
const quantityOfBasket = prompt("Количество товаров в корзине");
const promo = prompt("Промокод");


const calculate = (sum, quantity, code) => {
  let totalDiscount = 0;

  if (quantity > 10) {
    let discount = sum * 0.03;
    totalDiscount += discount;
    sum -= discount;
  }

  if (sum >= 30000) {
    let overflow = sum - 30000;
    discount = overflow * 0.15;
    totalDiscount += discount;
    sum -= discount;
  }

  if (code === "METHED") {
    sum -= sum * 0.1;
  } else if (code === "G3H2Z1" && totalDiscount >= 2000) {
    sum -= 500;
  }

  return sum
}


console.log(calculate(sumOfBasket, quantityOfBasket, promo));