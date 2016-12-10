'use strict';

console.log('1---------------------------------------------');
// 1. Есть три вершины. Координаты X, Y, Z заданы как целые числа. Нужно определить - является ли треугольник с заданными координатами прямоугольным.
// В решении использовать только математические и логические операторы. Результат в консоль.
// Обязательное условие: все вычисления производить только с целыми числами. Любой переход в дробные числа запрещен!

var                         // координаты вершин треугольника
xa = 3, ya = 4 , za = 5, 
xb = 3, yb = 8 , zb = 10,
xc = 3, yc = 5 , zc = 5;

var ab, bc, ac;             // стороны треугольника

ab = Math.sqrt(Math.pow((xb-xa), 2) + Math.pow((yb-ya), 2) + Math.pow((zb-za), 2))
bc = Math.sqrt(Math.pow((xc-xb), 2) + Math.pow((yc-yb), 2) + Math.pow((zc-zb), 2))
ac = Math.sqrt(Math.pow((xc-xa), 2) + Math.pow((yc-ya), 2) + Math.pow((zc-za), 2))

var sides = [ab, bc, ac];
//var sides = [2, 3, 2];
var minSide = sides[0];
var  maxSide = minSide;

for (var i = 1; i < sides.length; ++i) {
      if (sides[i] > maxSide) maxSide = sides[i];
      if (sides[i] <= minSide) minSide = sides[i];
  }

var midSide;
 for (var i = 1; i < sides.length; ++i) {
     if (sides[i] != maxSide && sides[i] != minSide){
         midSide = sides[i];
     }
 }
 
console.log('стороны треугольника: ' + sides);  
var result = (Math.pow(maxSide, 2) == Math.pow(minSide, 2) + Math.pow(midSide, 2)) ? 'треугольник прямоугольный' : 'треугольник не прямоугольный';
console.log('результат: ' + result);


console.log('2---------------------------------------------');
// 2. Создать массив из чисел. Выполнить сортировку массива по возрастанию методом пузырька. Запрещено использовать стандартные методы.
var massiv = [3, 6, 2, 8, 7, 9, 1];
var n = massiv.length;
var k;
console.log('Массив не отсортирован: ' + massiv);

for(var i = 0; i < n-1; i++){
    for(var j = 0; j < n-i; j++){
        if(massiv[j] > massiv[j + 1]){
            k = massiv[j];
            massiv[j] = massiv[j + 1];
            massiv[j + 1] = k;
        }
    }
}
console.log('Массив отсортирован: ' + massiv);


console.log('3---------------------------------------------');
// 3. Написать программу для перевода числа из десятичной системы счисления в двоичную и наоборот. Вам понадобится метод Math.floor(), чтобы отбросить дробную часть
var dec = 78;
var dvMs = [], i = 0 ; 
var ost;

while (dec > 0 ){
    dvMs[i] = dec%2;
    dec = Math.floor(dec/2) + '';
    i++;
}

var dv = "";
i = dvMs.length;
  while( i > 0){
      i--;
      dv = dv + dvMs[i];
  }
console.log("Двоичное значение: " + dv);

dec = null;
for (var i = 0; i < dvMs.length; i++){
    dec +=  Math.pow(2, i) * dvMs[i];
}
console.log('Десятичное значение: ' + dec);










