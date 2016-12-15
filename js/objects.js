// function that calls yourself, or module
(function (){
'use strict';
    console.log('Objects');
    var obj = {};  // empty Objects
    console.log(obj);

    var user = {};
    user.id = 2;   // we create object property and set value for it
    user.login = 'qwerty';
    user.email = 'qwerty@mail.com';

    // object.property_name 
    console.log( user.login);

    delete user.email; // deletes the property of object
    console.log( user.email);

    var loginKey = 'login';  // this name of property
    console.log(user[loginKey]);

    if('tr' in user) {
        console.log('tr');
    }else{
        console.log('no');
        }

        user = {
            id : 5,
            login : 'qwert',
            email : 'qwerty@mail.com',
        }


    var clients = {
           id_num : { 
                id1: '1', 
                id2: 'abc',
            },
            login : 'qwert',
            email : 'qwerty@mail.com',
    };
// obj.svoistvo = {}

var horseSize = 'big';
var ponysize = horseSize;
ponysize = 'small';
console.log('ponysize: ' + ponysize);
console.log('horseSize: ' + horseSize);

var horse = {
    size: 'big'
}
var pony = horse;  // link to one object
pony.size = 'small';
console.log('ponysize: ' + pony.size);
console.log('horseSize: ' + horse.size);


for(var key in clients){
    var x = clients[key];
    console.log('Property name: ' + key + '; Value: ' + x);
    if (typeof x == 'object'){
        for(var i in x){
            console.log('----- Property name: ' + i + '; Value: ' + x[i]);
        }
    }
}


user = {
    id : 3, 
    login : 'werwer',
    changeLogin: function (newLogin) {   // method for local propert object
        this.login = newLogin;
    },
}

user.changeLogin('New new new');
console.log(user.login);



var admin = {
    name : "Admin",
    rating : 5,
    addUserRating: function (rating) {  // method in object admin that adds property to object user and sets value for it
        user.rating = rating;
    }

}

admin.addUserRating(10);
console.log(user);


}());