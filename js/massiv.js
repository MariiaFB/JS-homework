'use strict';

console.log('Massivs');

var arr1 = []; // empty Massiv 
arr1 = new Array(1, 2, 3);
var arr2 = new Array(10); // empty massiv which will be inlude 10 items
console.log(arr1);

var pictures = ['rain', 'sun', 'cloud', 'sky'];
var userId = [3, 6, 2, 8];
var difArr = ['str', 45, null, undefined, false, true];

console.log(pictures);
console.log(userId);
console.log(difArr);

console.log(pictures[3]);
console.log(userId[3]);

pictures[2] = 'two';
console.log(pictures[2]);

console.log(pictures.length);

pictures.length = 2;
console.log(pictures.length);

console.log(pictures.pop()); // pop() deletes the last element of massiv and returns it
console.log(pictures);

console.log(pictures.push('NEW ELEMENT')); // push() adds new element to massiv
console.log(pictures);

console.log(pictures.shift()); // shift() deletes the first elemnt and returns it
console.log(pictures);

console.log(pictures.unshift('flower')); // unshift() adds the first element to massiv
console.log(pictures);

// splice(ind[delCount, element1, elemen2, ..., elementN]) deletes elements from end
difArr = ['str', 45, null, undefined, false, true];
difArr.splice(3);
console.log(difArr);

userId = [2, 4, 6, 5, 6, 8, 8, 3]
userId.splice(2, 4);   // (what, where)
console.log(userId);

userId = [2, 4, 6, 5, 6, 8, 8, 3]
userId.splice(2, 4, 'q', 'g');
console.log(userId);


var str = 'sky, blue ocean, sun';
var strArr = str.split(', ');
console.log(strArr);

str = strArr.join(' | ');
console.log(str);

pictures = ['rain', 'sun', 'cloud', 'sky'];

for(i = 0; i < pictures.length; i++){
    console.log(i+1 + '. ' + pictures[i]);
}

userId.sort();













