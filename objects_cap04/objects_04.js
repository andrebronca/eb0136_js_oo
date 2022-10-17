//pg 125
//the global object
var a = 1;
//console.log(window.a); //reference error
console.log(this.a);    //1

function Hero(name){
    this.name = name;
}

var h = Hero('Leonardo');
console.log(typeof h);  //undefined
//console.log(typeof h.name); //type error

console.log(this.name); //undefined
console.log(name);  //name se tornou global dentro da função

//name se tornou global pq a função foi chamada sem o operador new
//o this dentro da função a tornou global
//h não se tornou um objeto, então h.name não funciona

var h2 = new Hero('Michelangelo');
console.log(h2.name);   //Michelangelo

//constructor property
console.log(h2.constructor);    //[Function: Hero]

var h3 = new h2.constructor('Rafaelo');
console.log(h3.name);

//object literal notation
var o = {};
console.log(o.constructor);         //[Function: Object]
console.log(typeof o.constructor);  //function

//instanceof operator
console.log(h3 instanceof Hero);    //true
console.log(h3 instanceof Object);  //true
console.log(o instanceof Hero);     //false
console.log(o instanceof Object);   //true

//function that return objects
function factory(name){
    return {
        name: name
    };
}

var b = factory('one');
console.log(b.name);    //one
console.log(b.constructor);     //[Function: Object]

function C(){
    this.a = 1;
}
var c = new C();
console.log(c.a);   //1

function C2(){
    this.a = 1;
    return {b: 2};
}
var c2 = new C2();
console.log(c2.a);  //undefined
console.log(c2.b);  //2
console.log(a);     //1
