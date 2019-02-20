/*
8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

function power(val, pow){
	if(pow == 1)
		return val;
	return val = val * power(val, pow - 1);
}

var val = +prompt("Введите число: ");
var pow = +prompt("Введите степень для возведения: ");

alert(power(val, pow));