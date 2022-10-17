//pg 116
var myarr = ['red','blue','yellow','purple'];
console.log(myarr);
console.log(myarr[0]);
console.log(myarr[3]);

//simple object
var hero = {
    breed: 'Turtle',
    occupation: 'Ninja'
};
console.log(hero.breed +' '+ hero.occupation);

//formas de declarar key/value
var hero2 = {occupation: 1};    //preferência
var hero3 = {"occupation": 1};
var hero4 = {'occupation': 1};

//use '' ou "" para nomes que não servem como nomes de variáveis
var o = {
    $something: 1,
    'yes or no': 'yes',
    '!@#$%^&*': true
};
console.log(o.$something);
console.log(o['!@#$%^&*']);
//objects in javascritp are hashes

//talk é um método
var dog = {
    name: 'Benji',
    talk: function(){
        console.log('Woof, woof!');
    }
};
dog.talk();

//métodos também pode estar em arrays
var a = [];
a[0] = function(w){ console.log(w); };
a[0]('Boo!');

var book = {
    name: 'Catch-11',
    published: 1961,
    author: {
        firstname: 'Joseph',
        lastname: 'Heller'
    }
};
console.log(book.author.firstname);
console.log(book['author']['lastname']);
console.log(book['author'].firstname +' '+ book.author['lastname']);
var key = 'firstname';
console.log(book.author[key]);