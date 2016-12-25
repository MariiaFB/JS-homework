
;(function (){
    'use strict';

    var brush = document.createElement('input');
brush.setAttribute('id', 'brush');
brush.setAttribute('type', 'button');
brush.setAttribute('value', 'brush'); 

var brushColor = document.createElement('input');
brushColor.setAttribute('id', 'brushColor');
brushColor.setAttribute('type', 'color');
brushColor.setAttribute('value', '#660066');

var sizeColor = document.createElement('input');
sizeColor.setAttribute('id', 'sizeColor');
sizeColor.setAttribute('type', 'range');
sizeColor.setAttribute('value', '9');
sizeColor.setAttribute('min', '1');
sizeColor.setAttribute('max', '10');


var eraser = document.createElement('input');
eraser.setAttribute('id', 'eraser');
eraser.setAttribute('type', 'button');
eraser.setAttribute('value', 'eraser'); 

var canvas = document.createElement('canvas');
canvas.setAttribute('id', 'canvas');
canvas.classList.add('canvas');

var instruments = document.createElement('div');
instruments.setAttribute('id', 'instruments');
instruments.appendChild(brush); 
instruments.appendChild(brushColor);
instruments.appendChild(sizeColor);
instruments.appendChild(eraser);
instruments.classList.add('block');

var canvasPanel = document.createElement('div');
canvasPanel.setAttribute('id', 'canvasPanel');
canvasPanel.appendChild(canvas);
canvasPanel.classList.add('block');

var div = document.getElementById('paintPanel');
div.appendChild(instruments);
div.appendChild(canvasPanel);

var ctx = canvas.getContext("2d");
      ctx.fillStyle = "black";
      ctx.beginPath();

      var x;
      var y;

      canvas.onmousedown = function(e) {
        x = e.clientX;
        y = e.clientY;
        ctx.moveTo(x, y);
        ctx.strokeStyle = brushColor.value; // fillStyle= ?
        ctx.lineWidth = sizeColor.value;
        ctx.lineJoin = "round";
      }

      canvas.onmouseup = function(e) {
        x = null;
        y = null;
      }

      canvas.onmousemove = function(e) {
        if (x == null || y == null) {
          return;
        }
        x = e.clientX;
        y = e.clientY;
        x -= canvas.offsetLeft;
        y -= canvas.offsetTop;
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.moveTo(x, y);
      };

}(window));