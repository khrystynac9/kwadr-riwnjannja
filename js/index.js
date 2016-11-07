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
        return x1;
       
    } else {
        d = Math.pow(b, 2) - 4*a*c;
        if (d < 0) {
        x1 = "рівняння дійсних коренів не має";
        x2 = "рівняння дійсних коренів не має";
        } else if (d == 0) {
             x1 = -b/(2*a);
             x2 = -b/(2*a);
        } else {
            x1 = (- b + Math.sqrt(d))/(2*a);
            x2 = (- b - Math.sqrt(d))/(2*a);
        }
    }

document.getElementById("demo").innerHTML = x1;
document.getElementById("deko").innerHTML = x2;
}