(function (global){
    'use strict';

function Ship(id, sectionNumber) {
        this.sectionNumber = sectionNumber;
        this.health = sectionNumber;
        this.sections = [];
        this.id = id;
    }

function Section(x, y, status) {
        this.x = x;
        this.y = y;
        this.status = status;
        this.statusRange = {
            'empty' : 0,
            'setWithShip' : 1,
            'aroundShip' : 2
        }
}

function Field (playerId, width, height) {
       this.playerId = playerId;
       this.height = height;
       this.width = width;
       this.sections = [];
       this.validCoordinates = [];
}

function GameProcess(width, height, playersNumber) {
        this.playersNumber = playersNumber;
        this.players = [];
        this.fleet = [];
        this.width = width;
        this.height = height;
        this.map = [];
        this.shipsInFleet = [];
}


function Fleet (playerId, shipsNumber) {
       this.playerId = playerId;
       this.shipsNumber = [];
       this.ships = [];
       this.fleetStructure = {
           "fourDecksShips" : shipsNumber[0],
           "threeDecksShips" : shipsNumber[1],
           "twoDecksShips" : shipsNumber[2],
           "oneDeckShips" : shipsNumber[3],
       };
}

function Player (id, name) {
       this.id = id;
       this.name = name;
       this.score;
       this.statusGame;
       this.rangeStatusGame = {
           "off" : 0, // игрок не может совершать ход
           "on" : 1, // игрок может совершить ход
     };
}

//------------------------------------------------------------------------------------------------------------
/*Флот создает корабли*/
Fleet.prototype.createShips = function(shipsNumber) {
      var shipLength = shipsNumber.length;        
        for (var i = 0 ; i < shipsNumber.length ; i++) {            
            for (var j = 0; j < shipsNumber[i]; j++ ){
                var id = shipLength + '-' + (j + 1);
                this.ships.push(new Ship(id, shipLength));                
            }
            shipLength--;            
        }
};


/*Игровой процесс создает флот*/
GameProcess.prototype.createFleet = function(shipsNumber) {
    for(var i = 0; i < this.playersNumber; i++){
        this.fleet.push(new Fleet(i, shipsNumber));
        this.fleet[i].createShips(shipsNumber);
         
    }
    this.shipsInFleet = shipsNumber;
};


//------------------------------------------------------------------------------------------------------------
/*Создаем секции для одного поля*/
Field.prototype.createSections = function() {
this.sections = [];
        for (var i = 0; i < this.width; i++) {
            this.sections[i] = [];
            for (var j=0; j < this.height; j++) {
                this.sections[i][j] = new Section(i, j, 0); // status = 0 empty
            }
        }
};

/*Создаем карту, состоящую из поля или полей*/
GameProcess.prototype.createMap = function() {
        for (var i = 0; i < this.playersNumber; i++) {
            this.map[i] = new Field(i, this.width, this.height);
            this.map[i].createSections();
        } 
};


/*Check section is empty or not*/
Section.prototype.isSectionEmpty = function () {
    if (this.status === 0){
        return true;   
    }else{
        return false;   
    }
}

/*Get new status fot section*/
Section.prototype.getNewSectionStatus = function (newStatus) {
       this.status =  newStatus;   
};

/*Change color of section*/
Field.prototype.changeSectionColor = function (playerID, i, j) {
    var section = document.getElementById(playerID + '-' + i + '' + j);
    section.setAttribute('class', 'field1');
};

/*Get start cordinates of the ship*/
Field.prototype.getStartPosition = function () {
    var startCoordinates = [];
    for(var i = 0; i < 2; i++){
        startCoordinates[i] = Math.floor((Math.random() * 9) + 0);
    }
    return startCoordinates;
};

/*validate coordinates*/
Field.prototype.validateSectionCoordinates = function () {

};

/*Decide how to orient the ship and get coordinates*/
Field.prototype.getSectionCoordinates = function (orientation, quantityOfSections, i, j) {
    var coordinates = [];
    coordinates[0] = [];
    coordinates[0][0] = i;
    coordinates[0][1] = j;
    for (var n = 1; n < quantityOfSections; n++) {
            coordinates[n] = [];
            if(orientation === 0){
                coordinates[n][0] = i;
                coordinates[n][1] =  coordinates[n-1][1] + 1;
            }
            if(orientation === 1){
                coordinates[n][0] =  coordinates[n-1][0] + 1;
                coordinates[n][1] = j;
            }
    }
    return coordinates;
};

Field.prototype.getValidCoordinates = function (orientation, quantityOfSections, i, j){
var coordinates;
coordinates = this.getSectionCoordinates(orientation, quantityOfSections, i, j);
console.log('coordinates before validation: ' + coordinates);
if(coordinates[quantityOfSections-1][0] > 9 || coordinates[quantityOfSections-1][1] > 9){
    return false;
    }
else return coordinates;
};

/*Check if it is enought scpace to build new ship or not*/
Field.prototype.checkSpaceWithOrientation = function (orientation, quantityOfSections, i, j){
var x, y, areSectionsEmpty = true;
//console.log('coordinates after validation: ' + this.getValidCoordinates (orientation, quantityOfSections, i, j));
var validCoordinates = [];
validCoordinates = this.getValidCoordinates (orientation, quantityOfSections, i, j);
if(validCoordinates === false){
    return false;
}
else{
    for(var n = 0; n < quantityOfSections; n++){
        x = validCoordinates[n][0];
        y = validCoordinates[n][1];
        // console.log('x ' + x + ' y ' + y);
        areSectionsEmpty = this.sections[x][y].isSectionEmpty();
        areSectionsEmpty += areSectionsEmpty;
        if(areSectionsEmpty === false){
            return false;
        }
}
if(areSectionsEmpty)
        {
            return validCoordinates;
        } 
    }
};

/*Check if it is enought scpace to build new ship or not with chosen orientation*/
Field.prototype.checkEmptySpace = function (quantityOfSections, i, j){
var gorizontalPlacement = this.checkSpaceWithOrientation(0, quantityOfSections, i, j);
var verticalPlacement;
if(gorizontalPlacement === false)  {
    verticalPlacement = this.checkSpaceWithOrientation(1, quantityOfSections, i, j); 
    if(verticalPlacement === false){
        return false;
        }
        else return verticalPlacement;
}
else return gorizontalPlacement;
};

Field.prototype.returnValidCoordinates = function (quantityOfSections) {
    var i, j, validCoordinates = false;
    while(validCoordinates === false || validCoordinates === undefined)
    {
        i = this.getStartPosition()[0];
        j = this.getStartPosition()[1];
        validCoordinates = this.checkEmptySpace(quantityOfSections, i, j);
        return validCoordinates;
     }
  console.log("validCoordinates that returns last function " + validCoordinates);
};

/*Change status fot section*/
Field.prototype.setNewSectionStatus = function (playerID, quantityOfSections) {
    var validCoordinates = this.returnValidCoordinates(quantityOfSections);;
    while(validCoordinates === undefined){
        validCoordinates = this.returnValidCoordinates(quantityOfSections);
        return validCoordinates;
    };
    // console.log('coordinates after validation: ' + validCoordinates);
    var i, j;
       for(var n = 0; n < quantityOfSections; n++){
        i = validCoordinates[n][0];
        j = validCoordinates[n][1];
        console.log('I ' + i + ' J ' + j);
        this.sections[i][j].getNewSectionStatus(1);
        this.changeSectionColor(playerID, i, j); // IT MUST BE DELETED FROM HERE !!!
    }
};

/*Set new status for section for particular player*/
GameProcess.prototype.setShip = function (playerID, quantityOfSections) {
   this.map[playerID].setNewSectionStatus(playerID, quantityOfSections);
 
};

GameProcess.prototype.setFleet = function (playerID) {
    var fleet = this.shipsInFleet;
    
    var shipLength = fleet.length;        
        for (var i = 0 ; i < fleet.length ; i++) {            
            for (var j = 0; j < fleet[i]; j++ ){
               this.setShip(playerID, shipLength);                
            }
            shipLength--;            
        } 
};


//---------------------------------------------------------------------------

GameProcess.prototype.render = function (names = []) {//создание поля
    var parent = document.getElementById('gameFields');
    for(var n = 0; n < this.playersNumber; n++){
        var containerMap = this.createDOMelement('div', {class : 'containerMap'});
        var playerName = this.createDOMelement('div', {id : 'playerName', class : 'playerName'});
        playerName.appendChild(document.createTextNode(names[n] + ', сейчас твой ход!'));
        containerMap.appendChild(playerName);
        parent.appendChild(containerMap);
        for (var i = 0; i < this.width; i++) {
            for (var j = 0; j < this.height; j++) {
                var elem = this.createDOMelement('div', {'i' : i, 'j' : j, id : n + '-' + i + '' + j, class : 'field0'});
                containerMap.appendChild(elem);
            }
        }
    }
};



GameProcess.prototype.createDOMelement = function (tag, attr) {
    var elem = document.createElement(tag);
        for (var key in attr) {
            elem.setAttribute(key, attr[key]);
        }
        return elem;
    };

//------------------------------------------------------------------------------
GameProcess.prototype.createPlayers = function (name = []) {
        for(var i = 0; i < this.playersNumber; i++){
            this.players.push(new Player(i, name[i]));
    }
};

Player.prototype.setStatusGame = function () {
    var parent = document.getElementById('gameFields');
    parent.addEventListener('click', function(event){
        console.log(event.target)
             var playerName = document.getElementById('playerName');
             if(Section.status !== 1){ // игрок промахнулся
                this.statusGame = 0; // ход переходит другому игроку
                playerName.appendChild(document.createTextNode(this.name + ', сейчас совершает ход твой соперник...'));
             }else{
                this.statusGame = 1; // игрок продолжает атаковать
                playerName.appendChild(document.createTextNode(this.name + ', сейчас твой ход!'));
             }
    })
};

//------------------------------------------------------------------------------


var game1 = new GameProcess(10, 10, 2);
game1.createFleet([1, 2, 3, 4]);

var plaeyrNames = ['Tom', 'Jerry']

game1.createPlayers(plaeyrNames);
game1.createMap();
game1.render(plaeyrNames);
console.log(game1);

game1.setFleet(0);
game1.setFleet(1);


//game1.changeSectionStatus(1, 1, 3);
console.log(game1);




}(window));