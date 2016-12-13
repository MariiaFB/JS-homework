var a = 1;
console.log(a++); //postfix form
console.log(a);

var b = 1;
console.log(--b); //prefix form
console.log(b);

console.log('Named functions functionsDeclaration---------------------------------');
// All functions in JavaScript are objects
// function functionName(may be parametres, n1, ... , n2);
// {
    // body of funtion (codefun)
    // return;
// }
// call named functions we can from any place from code

function printSelf(){
    console.log(printSelf);
}
printSelf();  // call funtion by name


function printHello(name){
    for(var i = 0; i < arguments.length; i++){
        console.log('Hello, ' + arguments[i]);   // always are saved
}
        // console.log('Hello, ' + name);
}
printHello('Maria', 'Maksim', 'fg', 'ghj', null, 435);


function calc(a, b, operator){
    var checkTypeRes =  checkType(a, b);
    console.log(checkTypeRes);
    if(checkTypeRes){
        if(operator == '+'){console.log('Сумма: ' + (a + b));}
        
        if(operator == '-'){console.log('Вычитание: ' + (a - b));}

        if(operator == '*'){console.log('Умножение: ' + (a * b));}

        if(operator == '/' && b !=0){console.log('Деление: ' + (a / b));}

        else{
           console.log('На ноль делить нельзя'); 
        }
      }else{
        return;
    }
                            // return is undefined by default and STOPS the function    
}
// function calcAction(operator){

// }

calc(200, 0, '/');


function summa1(a, b){
    console.log('summa: ' + (a + b));
}
summa1(2); // result will be undefined NaN, bacause must be 2 parametres in this function


function summa2(a, b){
    b = b || 100;
    console.log('summa: ' + (a + b));
}
summa2(2);


function checkType(a, b){
    if (typeof(a) == 'number' && typeof(b) == 'number'){
        console.log('Correct data');
        return true;
    }else {
        console.log('Incorrect data');
        return false;
    }
  }
checkType(100, 200);


function ret(){
    return 'Blabla';
}
console.log(ret());


console.log('Anonimus functions functionsExpression--------------------------------');
// we can NOT call anonimus functions from any place from code, only after its creation
var checkEvenRes = function(number) {
    if (number%2 == 0){
        console.log('Чётное число');
    }
}
console.log(checkEvenRes(9));

// recursive function

function factorial(n){
    return n != 1 ? n * factorial(n-1) : 1;
}
console.log(factorial(3));

var x = 6;
function makeText(text){
    var y = 'txt';
    return x += 7;
}
console.log( makeText());


var name = 'Name';
function printName(){
    // 'use strict';
    this.name = 'New Name'; // only in context of this function
    console.log(this.name);
}

console.log(name);
printName();

var q = 6; // global variable
function showName(){
    function u(){
        consle.log(q);
    }
}
showName();


function functionName1(parameter1){
    var variable;
        function functionName2(parameter2){
        // has the access to parametre1
    }
}