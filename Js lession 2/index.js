const productName = prompt ("Введите название товара");
const quantityGoods = prompt ("Введите колличество товара");
const productCategory = prompt ("Введите категорию товара");
const  priceProduct = prompt ("Введите стоимость товара");


const quantityGoodsNum = Number(quantityGoods);
const priceProductNum = Number(priceProduct);


console.log (`На складе ` + quantityGoodsNum + ` единицы товара "` + productName + `" на сумму ` + (quantityGoodsNum * priceProductNum) + ` рублей`);