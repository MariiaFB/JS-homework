'use strict'; // it is new standart for browers work
 
console.log('Cikli');

// cicle with preconditions
// while () {
//       code will be executed until condition is true
// }

var pictures = 5;
while(pictures) {
    console.log(pictures);
    pictures--;
    if(pictures==3) break;
}
//iteration - repeat of cicle

// cicle with postcondition do ... while 
pictures = 5;
do {
    console.log(pictures);
    pictures--;
}
while (pictures);

var tarelki = 9;
var fairy = 40;

while(tarelki > 0 && fairy > 0){ // if true in ()
    tarelki--;
    fairy -= 0.5;
    console.log('Fairy' + fairy);
    if(tarelki == 0 || fairy == 0)
    break;
}
    console.log('Fairy ' + fairy, 'tarelki ' + tarelki);


// for (start; condition; step){...}

// for(;;) infinity cicle

for (var i = 0; i < 7; i++){
    console.log(i);
}




