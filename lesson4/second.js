/*
2.	Продолжить работу с интернет-магазином:
a.	В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
b.	Реализуйте такие объекты.
c.	Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }


var basket = []

// функция добавления товара в корзину
function addToBasket(product, count){
	var basketPosition = Object.assign({}, product);
	basketPosition.count = count;
	basketPosition.totalPrice = basketPosition.price * count;
	basket.push(basketPosition);
}

// функция подсчета общей стоимости корзины
function totalBasketPrice(){
	var totalPrice = 0;
	for(var i = 0; i< basket.length; i++){
		totalPrice += basket[i].totalPrice;
	}
	return totalPrice;
}


var products = [
	{
    name: 'Футбольный мяч',
    price: 1000,
  	},
	{
    name: 'Баскетбольный мяч',
    price: 1500,
  	},
	{
    name: 'Шайба',
    price: 100,
  	},
]

for(var i = 0; i< products.length; i++){
	addToBasket(products[i], randomInteger(1, 10));
}
console.log(basket);

alert(`Общая цена товаров: ${totalBasketPrice()}`);