'use strict';

console.log('If else switch');

// logic oparators || or, && and, ! not
//0, '', Nan, null, undefined -> false

var  year = 2009;
var answer = (year >= 2000 && year <= 2008) ? 'both conditions true' : 'one condition - false';
console.log(answer);
answer = (year < 2000 || year < 2008) ? 'one condition - false' : 'no one true';
console.log(answer);

var boo = 8;
console.log(!boo);
// !! to logic type
5 > 7 ? 'ok' :
    5 > 7  ? 'ok' : 'not ok';

var date = new Date();
var month = date.getMonth(); // from 0 to 11, where january - 0

var yearTimes = (month ==11 || month <=1) ? 'winter' : 
    (mounth >=2 || mount <=4) ? 'spring':
        (month >=5 || month <=7) ? 'summer' : 'autam';
// 'spring', 'summer', 'winter', 'autam'
console.log(yearTimes);

// if (condition) { code1
//} else if (condition) {code2}
// else {code3}

if (month ==11 || month <=1) {
    yearTimes = 'winter';
}
else if (mounth >=2 || mount <=4) {
    yearTimes = 'spring';
}
else if (month >=5 || month <=7) {
    yearTimes = 'summer';
} else {
    yearTimes = 'autam';
}
    console.log(yearTimes);


// switch   // not recommened
// if not break others are ignred
switch(yearTimes){
    case 'spring' : console.log('spring');
    break;

    case 'summer' : console.log('summer');
    break;

    case 'autam' : console.log('autum');
    break;

    case 'winter' : console.log('!!!!!');
    break;
}




