var tC = prompt('Введите значение температуры в градусах по Цельсию');
if (isNaN(tC))
    {alert('Вы ввели не число');}
else
    {var tF = (9 / 5) * tC + 32;
    alert(`${tC}°C = ${tF}°F`);
    }
    
