'use strict';

var students;   // determing variables
students = 15;   // giving value for variable


var str = 'Students: ';
var num = 9;
var booT = true;
var booF = false;
var unknownValue = null;
var notSetValue;  //undefined

console.log(str + students);
console.log(notSetValue);
console.log(typeof(num));

var str1 = 'В JS ';
var str2 = ' типов данных - ';
var num = 6;
console.log(str1 , num , str2 , booT);

var obj = {type: 'Object'};

var num1 = 2;
var num2 = 4;
var result = num1 + num2;

console.log('Summa: ' + result);
console.log('Difference: ' + (num1 - num2));
console.log('Multiplication: '+ (num1 * num2));
console.log('Division: ' + (num1 / num2));

result = - result;
var str1 = 'Hello, ';
var str2 = 'World!';
var resultStr;
resultStr = str1 + str2;
console.log(resultStr);

console.log(+'4' * +'6');

var n = 9;
n += 1; // n = n + 1;
n *= 5; // n = n * 5;
console.log(n);


// part from Division
var x = '10', y = 3;
var z = +x%y;
z *= 3;
z += 5;
console.log('Result: ' + z );

var num = 57;
num = "String";
console.log(typeof(num));

// increment +1
var i = 1;
i++;
console.log('increment of 1: ' + i);

// decrement -1
var j = 10;
j --;
console.log('decriemnt of 10: ' + j);

// comparison operators > < == !=
console.log(5 > 'str');
console.log(5 > 9);
console.log('asgfh' > 'ss');
console.log(0 == false);

// strict equality ===  не преобразует к типу
console.log(0 === false);
console.log('' === false);

// turn operator
console.log(1 < 2 ? true : false);
var x = 5, y = 7;
console.log((x%y)<= 4 ? 'part from division is larger ' + x + y : 'part from division is not larger ' +  x%y);


var z = 9 / 0;
console.log(z);

var n = 4, m = 6;
//if  perimentr is bigger than 14  > find diagonal, if less > find ploshad. result in console
Math.sqrt(x); // qv koren
console.log( (n+m)*2 > 14 ?  Math.sqrt(Math.pow(n,2) + Math.pow(m,2)) : n*m);


console.log('Homework:');

// площащь параллелипипеда
var a = 3, b = 123, c = 0.7;
console.log('1. ' + 2*(a*b+b*c+c*a));

// остаток незанятой площади
console.log('2. ' + 1000%(15*25));

// площадь овального кольца
console.log('3. ' + (15-600/100));














