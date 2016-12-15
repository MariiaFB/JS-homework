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
            return this.population = city2.population - people + this.population;
        },
    };

    var city2 = new city('Moscow', 10000, 'two');

    city1.addPopulation(2000);

    console.log(city1, city2); 

    function  enterCity(enterCity){
        if(enterCity == city1.name){
            console.log('name: ' + city1.name); 
            console.log('population: ' + city1.population); 
            console.log('mayor: ' + city1.mayor); 
        }else if( enterCity == city2.name){
            console.log('name: ' + city2.name); 
            console.log('population: ' + city2.population); 
            console.log('mayor: ' + city2.mayor); 
        }else{
            console.log("Нет информации о таком городе"); 
        }
    }

enterCity('London');

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

function useCalculator(agreement){
    if (agreement == true){
        return true;
    }else{
        return false;
    }

}

function getDataFromUser(){
    
}

function operations(a, operator, b){
    var result; 
    // result = calculation with a, operator and b
    return result;
};

function runCalculator(agreement){
    'use strict';
    if(useCalculator(agreement)){
        getDataFromUser();
        operations(a, operator, b);
    }else{
        console.log('Программа будет закрыта!');
        return;
    }

}


runCalculator(true);













