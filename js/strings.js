'use strict';
console.log('strings');

var str = 'word1\nword2\nword3';
console.log(str);

str = 'use \\n';  // to ecran
console.log(str);

str = 'use \\';
console.log(str);

str = 'String \'STRING\'';
console.log(str);

str = 'String "STRING"';
console.log(str);

str = 'String';
console.log('length of word ' + str + ': ' + str.length);  // length of word

console.log(str.charAt(20));  // access to symbol by position

console.log(str[20]);

console.log(str.indexOf('ng', 3));  // return position, returns -1, if no symbols in particular word

console.log(str.toUpperCase());  // to Upper case
 
console.log(str[2].toLowerCase()); // to Lower case

console.log(str.substr(1, 4));  // the first argument is required, the second not

console.log(str.slice(0, 4));  // the first argument is required, the second not 

console.log(str.localeCompare('String')); // returns 0, if strings are equal; -1 if str2 > str1; 1 if str2 < str1

var height = '12.6 sm';
var width = '35 sm';

console.log(parseInt(height));
console.log(parseInt(width));

console.log(parseFloat(height));  // returns string
console.log(parseFloat(width));











// homework! string with repeatable symbols



