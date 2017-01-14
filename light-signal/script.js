(function (global){
    'use strict';
 
function changeColor (){
var redOn = document.getElementById('redOn');
var yellowOn = document.getElementById('yellowOn');
var greenOn = document.getElementById('greenOn');
var redOff = document.getElementById('redOff');
var yellowOff = document.getElementById('yellowOff');
var greenOff = document.getElementById('greenOff');

    if (redOn){
        redOn.setAttribute('id', 'redOff');
        yellowOff.setAttribute('id', 'yellowOn');
       }

    if (yellowOn){
        yellowOn.setAttribute('id', 'yellowOff');
        greenOff.setAttribute('id', 'greenOn');
        }

     if (greenOn){
        redOff.setAttribute('id', 'redOn');
        greenOn.setAttribute('id', 'greenOff');
        }
    }

setInterval(changeColor, 2000);

}(window));