(function (global) {
    'use strict';


    function randomInt(min, max) {
        if (arguments.length < 2) {
            max = min;
            min = 0;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    function Person(firstname, lastname) { // создаем функцию-конструктор Person
        this.firstname = firstname;  // добавляем свойство firstname
        this.lastname = lastname; // добавляем свойство lastname
    }

    Person.prototype.getFullName = function () {  // добавили метод getFullName к объекту Person
        return this.firstname + ' ' + this.lastname;
    };

    
    function Fan(firstname, lastname) {  // создаем функцию-конструктор Fan
        Person.call(this, firstname, lastname);  // вызываем функцию Person
    }

    Fan.prototype = Object.create(Person.prototype); // Задаем наследование для функции Fan от функции Person
    Fan.prototype.constructor = Fan;  // возвращаем свойство конструктора для функции Fan

    Fan.prototype.onGoal = function () {  // создаем метод для Fan 
        var reaction = ['скандирует речевку', 'палит фаер', 'машет флагом'],
            i = randomInt(reaction.length - 1);
        return this.getFullName() + ' ' + reaction[i];
    };

    Fan.prototype.onFail = function () {  // создаем вторрой метод для Fan 
        var reaction = ['хватается за голову', 'кричит судью на мыло', 'зачиняет драку'],
            i = randomInt(reaction.length - 1);
        return this.getFullName() + ' ' + reaction[i];
    };


    function Footballer(firstname, lastname) { // создаем функцию-конструктор Footballer
        Person.call(this, firstname, lastname);  // вызываем функцию Person
    }

    Footballer.prototype = Object.create(Person.prototype); // Задаем наследование для функции Footballer от функции Person
    Footballer.prototype.constructor = Footballer; // возвращаем свойство конструктора для функции Footballer

    Footballer.prototype.goal = function () {  // создан метод для Footballer
        this.team.goals += 1;
    };


    function Team(name) { // создаем функцию-конструктор Team
        this.name = name;  // добавляем переменные
        this.footballers = [];
        this.fans = [];
        this.goals = 0;
    }

    Team.prototype.addFootballer = function (footballer) { // создан метод для Team добавления футболистов
        this.footballers.push(footballer); // добавление в массив элемента
        footballer.team = this;
    };

    Team.prototype.addFan = function (fan) { // создан метод для Team добавления фанатов
        this.fans.push(fan);
        fan.team = this;
    };


    function Scoreboard(elemId, team1, team2) { // создана функция-конструктор Scoreboard
        this.elem = document.getElementById(elemId); // находим элемент по айди и присваиваем его к elem
        this.elem.classList.add('scoreboard'); // добавляем css класс для выше заданного элемента
        this.elem.innerHTML = '\
            <div>\
                <div class="team"></div>\
                <div class="score">\
                    <span>0</span>\
                    <span>:</span>\
                    <span>0</span>\
                </div>\
                <div class="team"></div>\
            </div>\
            <div class="messages"></div>'
        // добавлены HTML элементы
        this.messages = this.elem.querySelector('.messages'); // возвращает первый элемент с указанным css классом messages
        this.team1Score = this.elem.querySelector('.score span:first-child'); // возвращает первый элемент с указанным css классом .score span:first-child
        this.team2Score = this.elem.querySelector('.score span:last-child'); // возвращает первый элемент с указанным css классом score span:last-child

        this.elem.querySelector('.team:first-child').appendChild(document.createTextNode(team1.name)); // добавляет элемент с текстом имени команды в найденный элемен по css классу
        this.elem.querySelector('.team:last-child').appendChild(document.createTextNode(team2.name)); 

        this.team1 = team1; // ???
        this.team2 = team2;
    }

    Scoreboard.prototype.showMessage = function (msg) { // создан метод показа сообщения
        var p = document.createElement('p');
        p.appendChild(document.createTextNode(msg));

        this.messages.insertBefore(p, this.messages.firstChild );
    };

    Scoreboard.prototype.updateScore = function () { // добавлен метод обновления счета команды
        this.team1Score.replaceChild(  // удаляем один элемен и пишем взамен другой
            document.createTextNode(team1.goals),
            this.team1Score.firstChild
        );

        this.team2Score.replaceChild(
            document.createTextNode(team2.goals),
            this.team2Score.firstChild
        );
    };


    function Game(elemId, team1, team2) {  // создана функция-конструктор Game
        this.team1 = team1;
        this.team2 = team2;
        this.scoreboard = new Scoreboard(elemId, team1, team2);
    }

    Game.prototype.start = function (matchTime) {
        var that = this;

        matchTime = matchTime || 10; // задано значение по умолчанию 10

        function timeout() {
            var team = randomInt(1) ? that.team1 : that.team2,  // рандомный выбор команды
                opponents = team === that.team1 ? that.team2 : that.team1, // выбор команды-противника
                footballer = team.footballers[randomInt(team.footballers.length - 1)], // рамномно выбираем футболиста команды
                success = randomInt(1), // забит гол
                i,
                msg;

            if (success) {
                footballer.goal();
                that.scoreboard.showMessage(footballer.getFullName() + ' забил гол!'); // вывод сообщения, что один из игроков забил гол
            }

            i = team.fans.length;

            while (i--) {
                msg = success ? team.fans[i].onGoal() : team.fans[i].onFail();
                that.scoreboard.showMessage(msg); 
            }

            i = opponents.fans.length;

            while (i--) {
                msg = success ? opponents.fans[i].onFail() : opponents.fans[i].onGoal();
                that.scoreboard.showMessage(msg);
            }

            that.scoreboard.updateScore();

            matchTime -= 1;
            
            if (matchTime) {
                setTimeout(timeout, 1000);  // вызов функции setTimeout
            }
        }
        
        setTimeout(timeout, 1000); 
    };


    var team1, team2,
        footballer1, footballer2, footballer3, footballer4,
        fan1, fan2, fan3, fan4,
        game;

    team1 = new Team('Питерские Гризли');
    team2 = new Team('Гламурные Ёжики');

    footballer1 = new Footballer('Дмитрий', 'Иванов');
    footballer2 = new Footballer('Михаил', 'Иванов');
    footballer3 = new Footballer('Игорь', 'Смирнов');
    footballer4 = new Footballer('Юрий', 'Васильев');

    fan1 = new Fan('Кирилл', 'Версетти');
    fan2 = new Fan('Виталий', 'Чертков');
    fan3 = new Fan('Дарья', 'Буртова');
    fan4 = new Fan('Сергей', 'Хоружа');

    team1.addFootballer(footballer1);
    team1.addFootballer(footballer2);
    team1.addFan(fan1);
    team1.addFan(fan2);

    team2.addFootballer(footballer3);
    team2.addFootballer(footballer4);
    team2.addFan(fan3);
    team2.addFan(fan4);

    game = new Game('football-wrapper', team1, team2);
    game.start();
}());