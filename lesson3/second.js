/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/


var basket = []

function AddToBasket(name, price, count){
	var basket_position = {
	"Name":name,
	"Price":price,
	"Count":count,
	"TotalPrice":price * count
};
	basket.push(basket_position);
}

function TotalBasketPrice(){
	var total_price = 0;
	for(var i = 0; i< basket.length; i++){
		total_price += basket[i].TotalPrice;
	}
	return total_price;
}


var arr = [["Футбольный мяч", 1000, 5], ["Баскетбольный мяч", 1500, 3], ["Шайба", 100, 15]]

for(var i = 0; i< arr.length; i++){
	AddToBasket(arr[i][0], arr[i][1], arr[i][2]);
}
console.log(basket);

alert(`Общая цена товаров: ${TotalBasketPrice()}`);
