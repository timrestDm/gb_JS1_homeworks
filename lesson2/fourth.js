/*4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. */

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }

var a = randomInteger(0, 15);

alert('Выпавшее число - ' + a );
switch(a)
    {
        case 0:
			alert ('0');
        case 1:
			alert ('1');
		case 2:
			alert ('2');
		case 3:
			alert ('3');
		case 4:
			alert ('4');
		case 5:
			alert ('5');
		case 6:
			alert ('6');
		case 7:
			alert ('7');
		case 8:
			alert ('8');
		case 9:
			alert ('9');
		case 10:
			alert ('10');
		case 11:
			alert ('11');
		case 12:
			alert ('12');
		case 13:
			alert ('13');
		case 14:
			alert ('14');
		case 15:
			alert ('15');
            break;
    }