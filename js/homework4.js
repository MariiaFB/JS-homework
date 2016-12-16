console.log('Задача 1.1---------------------------------------------');
// 1.1 Написать программу, которая найдет все вхождения строки blaStr в строку strWithBla
// 1.2 Написать функцию, которая на вход принимает строку и подстроку и ищет все вхождения подстроки в строку

(function (){
    'use strict';
    var strWithBla = 'String with "bla-bla-bla"';
    var blaStr = 'bla';

    var index = 0, i = 0, count = 0;
    while(strWithBla.length > i+blaStr.length){
        index = strWithBla.indexOf(blaStr, i)
        i = index + 1;
        count += 1;
        console.log('Вхождение "' + blaStr + '" в фразу ' + strWithBla + ', начиная с индекса ' + index);
    }

console.log('Всего Вхождений: ' + count);    

}());


console.log('Задача 1.2---------------------------------------------');
function findInputs(fullString, partString){
    var index = 0, i = 0, count = 0;
    while(fullString.length > i+partString.length){
        index = fullString.indexOf(partString, i)
        i = index + 1;
        count += 1;
        console.log('Вхождение "' + partString + '" в фразу ' + fullString + ', начиная с индекса ' + index);
    }

console.log('Всего Вхождений: ' + count);     
}
findInputs('qweasdrtyuasd' , 'asd');


console.log('Задача 2.---------------------------------------------');
// 2.1 Создать разными способами 2 объекта sity1 и sity2 со следующими свойствами:
//     1. name,  
//     2. population, 
//     3. mayor
// 2.2 В city1 добавить метод, который на вход принимает число - количество людей, 
// вычитает это количество из population city2 и прибавляет к своему. 
// 2.3 Написать функцию (отдельно от объектов), которая принимает на вход город и 
// выводит в консоль всю информацию о нем
// 2.4 Создать объект president c методом changeMayor(), который меняет мэра города

(function (){



function city(name, population, mayor) {
  this.name = name;
  this.population = population;
  this.mayor = mayor;
  }
        
    
    
    var city1 = {
        name : 'London',
        population : 8000,
        mayor : 'one', 
        addPopulation : function(people){
            city1.population = city2.population - people + city1.population;
            city2.population = city2.population - people;
        },
    };

    var city2 = new city('Moscow', 10000, 'two');

    city1.addPopulation(2000);

    console.log(city1, city2); 

    function  enterCity(enterCity){
       console.log('Mayor of city: ' + enterCity.mayor); 
    }
   enterCity(city1);

var president = {
    changeMayor : function(newMayor){
          city1.mayor = newMayor;
      
    }
}

president.changeMayor('new Mayor');
console.log(city1);

}());


console.log('Задача 3.---------------------------------------------');
// 1. функция runCalculator() 
//     запускает функцию useCalculator(),
//         если функция вернула false сообщает пользователю о закрытии      
//                         программы и прекращает работу,
//         если вернула true - продолжает работу:
//             запускает функцию getDataFromUser(),
//             получает от нее данные, вида [a, operator, b],
//             обрабатывает данные для передачи 
// в функцию operations(a, operator, b), запускает её,
//             выводит результат, который вернет функция operations(a, operator, b).     


// 2. функция useCalculator()
//     Спрашивает пользователя, согласен ли он запустить калькулятор, 
//         в случае согласия возвращает true,
//         в случае отказа возвращает false 

function useCalculator(){
    var answer = confirm('Use calculator?');
    if (answer){
        return true;
    }else{
        return false;
    }
}

function runCalculator(){
    'use strict';
    if(useCalculator){
        var res = getDataFromUser();
        var a = res[0];
        var operator = res[1];
        var b = res[2];
        var result = operations(a, operator, b);
        alert('Result: ' + result);
        return;
    }else{
        alert('Программа будет закрыта!');
        return;
    }

}

runCalculator(true);













