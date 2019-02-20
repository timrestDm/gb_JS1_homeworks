/*5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.*/

function Sum(a, b)
{
    return a + b;
}

function Subtraction (a, b)
{
    return a - b;
}

function Multiplication(a, b)
{
    return a * b;
}

function Division (a, b)
{
    if (b == 0)
        return alert("Упс, но 0 делить нелья!");
    return a / b;
}

var a = +prompt("Введите первое число: ");
var b = +prompt("Введите второе число: ");
var t = prompt("Введите тип операции над числами (sum - сложение, sub - разность, m - умножение, d - деление)");

switch(t)
    {
        case "sum":
            alert(`Сумма чисел \'${a}\' и \'${b}\' = ${Sum(a,b)}`);
            break;
        case "sub":
            alert(`Разность чисел \'${a}\' и \'${b}\' = ${Subtraction(a,b)}`);
            break;
        case "m":
            alert(`Произведение чисел \'${a}\' и \'${b}\' = ${Multiplication(a,b)}`);
            break;
        case "d":
            alert(`Деление чисел \'${a}\' и \'${b}\' = ${Division(a,b)}`);
            break;
        default:
            alert(`Вы ввели что то не то`);
            break;
    }