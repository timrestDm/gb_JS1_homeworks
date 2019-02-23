/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
*/

function mathOperation(a, b, operation){
    var res;
    switch (operation)
    {
        case "sum":
            res = a + b;
            break;
        case "sub":
            res = a - b;
            break;
        case "m":
            res = a * b;
            break;
        case "d":
            if(b == 0)
                return alert("Упс, но 0 делить нелья!");
            res = a / b;
            break;
        default:
            alert(`Вы ввели что то не то`);
            break;
    }
    return res;
}

var a = +prompt("Введите первое число: ");
var b = +prompt("Введите второе число: ");
var t = prompt("Введите тип операции над числами (sum - сложение, sub - разность, m - умножение, d - деление)");

var res = mathOperation(a, b, t);
alert(res);

