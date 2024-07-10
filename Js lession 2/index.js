const productName = prompt ("Введите название товара");
const quantityGoods = prompt ("Введите колличество товара");
const productCategory = prompt ("Введите категорию товара");
const  priceProduct = prompt ("Введите стоимость товара");


const quantityGoodsNum = Number(quantityGoods);
const priceProductNum = Number(priceProduct);

// Первая задача

if (quantityGoodsNum > 0 && priceProductNum > 0) {
  console.log (`На складе ` + quantityGoodsNum + ` единицы товара "` + productName + `" на сумму ` + (quantityGoodsNum * priceProductNum) + ` рублей`);
} else {
  console.log("Вы ввели некорректные данные");
}