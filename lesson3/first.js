//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

// Способ 1. Использование рекурсивной функции
function IsPrimeNumber(num, div){
	if (div == 1)
		return true;
	if (num % div == 0)
		return false;
	else
		return IsPrimeNumber(num, div - 1);
}


for(var i = 2; i < 101; i++){
	if(IsPrimeNumber(i, i-1) == true)
		console.log(i);
//		alert(i);
}

// Способ 2. Использование цикла while и массива - вычисляем все не простые числа, путем 
// перебора всех чисел подряд и вычеркивания их множителей

var arr = new Array(101); // создаем новый массив со 101 элементом
// заполняем его числами от 0 до 100
for(var i = 0; i < arr.length; i ++){
	arr[i] = i;
}
// 1 - не простое число
arr[1] = 0;

var i = 2; // начинаем перебирать со 2го элемента (с 2ки, так как это первое простое число)
while (i < arr.length){
	if(arr[i] != 0)
		{
			// убираем все числа начиная с множителя 2 
			var j = i * 2;
			while(j < arr.length){
				arr[j] = 0;
				j += i;
			}
		}
	i++;
}

for(var i = 0; i < arr.length; i ++){
	if (arr[i] != 0)
		{
			console.log(arr[i]);
		}
}