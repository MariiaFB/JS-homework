
(function (){
'use strict';
var brush = document.createElement('input');
brush.setAttribute('type', 'button');
brush.setAttribute('value', 'brush'); 

var brushColor = document.createElement('input');
brushColor.setAttribute('type', 'color');
brushColor.setAttribute('value', '#ff0000');

var sizeColor = document.createElement('input');
sizeColor.setAttribute('type', 'range');
sizeColor.setAttribute('min', '1');
sizeColor.setAttribute('max', '10');


var eraser = document.createElement('input');
eraser.setAttribute('type', 'button');
eraser.setAttribute('value', 'eraser'); 

var canvas = document.createElement('canvas');

var instruments = document.createElement('div');
instruments.appendChild(brush); 
instruments.appendChild(brushColor);
instruments.appendChild(sizeColor);
instruments.appendChild(eraser);

var canvasPanel = document.createElement('div');
canvasPanel.appendChild(canvas);

}());