console.log('Задача 1.---------------------------------------------');
// 1. Напишите функцию (), которая в зависимости от переданных в нее целочисленных аргументов "количество дней", 
// будет выводить слово "день" в нужно форме 
// ("если передали - 1, то 1 день", "если передали - 3, то 3 дня" и т.д). 

function setDays(quantity) {
    'use strict';
    var days = [' день' , ' дня ', ' дней '];
    if((quantity%10 == 1 && quantity > 20 && quantity%100 != 11) || quantity == 1){
        console.log(quantity + days[0]);
    }
    else if((quantity%10 > 1 && quantity%10 < 5 && quantity > 20 && quantity%100 < 5) || (quantity > 1 && quantity < 5)) {
        console.log(quantity + days[1]);
    }
    else{
        console.log(quantity +  days[2]);
    }
}
setDays(100021);


console.log('Задача 2.---------------------------------------------');
// 2. Дано целое число n. Вычислите сумму его цифр. Использовать только рекурсию.

function summ(s){
    'use strict';
    return s > 10 ? s%10 + summ(Math.floor(s/10))  : s;
} 

function summOut(num){
console.log('Сумма цифр числа '  + num + ': ' + summ(num));
};

summOut(123450);


console.log('Задача 3.---------------------------------------------');
// Написать функцию, которая возвращает новую функцию, 
// которая увеличивает/уменьшает переданное число на указанный при карировании шаг. 

function summa(number, step){    
    'use strict';
    var getNumber = number;
    if (typeof number == "undefined")
    {
        return function (step)
        {
            return getNumber + step;
        };
    }
    return number + step;
}
console.log((summa(5, -1)));  








