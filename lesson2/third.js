/*3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. */

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }


var a = randomInteger(-10, 10);
var b = randomInteger(-10, 10);

if (a >= 0 && b >= 0)
{
    alert(`Разность чисел \'${a}\' и \'${b}\' = ${a - b}`);
}
else if (a < 0 && b < 0)
    {
        alert(`Произведение чисел \'${a}\' и \'${b}\' = ${a * b}`);
    }
else 
    {
        alert(`Сумма чисел \'${a}\' и \'${b}\' = ${a + b}`);
    }
