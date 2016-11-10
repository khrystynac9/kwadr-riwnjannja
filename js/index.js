var a = Number(prompt("Задайте коефіцієнт а"));
var b = Number(prompt("Задайте коефіцієнт b"));
var c = Number(prompt("Задайте коефіцієнт c"));


function kwa(a, b, c) {
    var d;
    var x1;
    var x2;

    if (a == 0) {
        x1 = 'неповне квадратне рівняння';
        x2 = 'неповне квадратне рівняння';
    }
    else {
        d = Math.pow(b, 2) - 4 * a * c;
        if (d < 0) {
            x1 = "рівняння дійсних коренів не має";
            x2 = "рівняння дійсних коренів не має";
        }
        else if (d == 0) {
            x1 = -b / (2 * a);
            x2 = -b / (2 * a);
        }
        else {
            x1 = (-b + Math.sqrt(d)) / (2 * a);
            x2 = (-b - Math.sqrt(d)) / (2 * a);
        }
    }
    return [x1, x2];
}

var res = kwa(a, b, c);

document.getElementById("demo").innerHTML = res[0];
document.getElementById("deko").innerHTML = res[1];
