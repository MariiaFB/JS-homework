(function (global) {
    'use strict';

    console.log('Cross game');

    function Field() {

    }

    function Player(type) {  
        this.type = type;   // данная переменная будет обозначать, какого типа игрок (крестик или нолик) 
        this.gameSteps = 0; // количество шагов игрока, изначально всегда ноль
    }

    Player.prototype.makeGameStep = function () {
        this.gameSteps += 1;  // с каждым ходом количество шагов увеличивается
    };

    Player.prototype.getEmptyCells = function () { // метод определения игроком пустых клеток на поле
        
    };

    function MessageOut(elementId, team1, team2) {  // фукция-конструктор, которая будет выдавать сообщение о победе или проигрыше пользователя

    }

    MessageOut.prototype.showMessage = function (msg) { // создан метод показа сообщения о пебеде или проигрыше
        var p = document.createElement('p');
        p.appendChild(document.createTextNode(msg));
        this.messages.insertBefore(p, this.messages.firstChild );
    };

    function Game(elementId, player1, player2) {  // создана фукция-конструктор Игры
        this.player1 = player1;
        this.player2 = player2;
        this.messageOut = new MessageOut(elementId, team1, team2);
    }

    Game.prototype.start = function () {

        var success, 
        i, 
        fields = [9],
        min = 0, max = fields.length-1;

        i = min + Math.floor(Math.random() * (max + 1 - min));

        fields[i] = 1;   // присваиваем значение 1- крестика

        // получаем свободные ячейки в массиве (null)
        // ход делает человек (1-крестик)
        // снова получаем свободные ячейки
        // ход делает компьютер (0-нолик)
        // и так до состояния success (чья-либо победа) или до тех пор, пока клетки не закончатся

        success = function gameResult(){ // фукция определения чьей-либо победы
            if(fields[1] === fields[2]){
                return true;
            }else {
                return false;
            }
            
        
        };

        if (success) {
                    // выводим сообщение о выигрыше и заканчиваем игру
        };


    }

    var player1, player2, game;

    player1 = new Player('Computer');
    player2 = new Player('You');

    game = new Game('cross-wrapper', team1, team2);
    game.start();

}(window));