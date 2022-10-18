//pg 150
//function (formas de criar uma função)
function sum(a, b){
    return a + b;
}
console.log( sum(7,3));     //10

var multiplic = function (a, b){
    return a * b;
};

console.log( multiplic(7, 3));  //21

var subtract = new Function('a', 'b', 'return a - b;');
console.log( subtract(7,3));    //4

var first = new Function(
    'a, b, c, d',
    'return arguments;'
);
console.log( first(1,2,3,4));   //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

var second = new Function(
    'a, b, c',
    'd',
    'return arguments;'
);
console.log( second(1,2,3,4));  //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

var third = new Function(
    'a',
    'b',
    'c',
    'd',
    'return arguments;'
);
console.log( third(1,2,3,4,5)); //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

//function() não é uma boa opção, tanto quanto eval()

//properties of functions objects
console.log( sum.constructor );     //[Function: Function]
console.log( sum.constructor() );   //[Function: anonymous]
console.log( sum.length );  //2 (quantidade de parametros)

//prototype property
var ninja = {
    name: 'Ninja',
    say: function(){
        return 'I am a '+ this.name;
    }
};

function F() {}
console.log(typeof F.prototype );   //object
//F agora aponta para ninja, pode ser criado novos objetos
F.prototype = ninja;
console.log(typeof F.prototype );   //object

var baby_ninja = new F();
console.log( baby_ninja.name );     //Ninja
console.log( baby_ninja.say() );    //I am a Ninja

//methods of function objects
function myFunc(a, b, c){
    return a + b + c;
}
console.log( myFunc.toString() );
/* toString() em função retorna o código fonte da função
function myFunc(a, b, c){
    return a + b + c;
}
*/

//call and apply
var some_obj = {
    name: 'Ninja',
    say: function(w){
        return 'Haya '+ w +', I am a '+ this.name;
    }
};
console.log(some_obj.say('Dude'));  //Haya Dude, I am a Ninja

var my_obj = {name: 'Scripting guru'};
console.log( some_obj.say.call(my_obj, 'Dude'));
//Haya Dude, I am a Scripting guru

//equivalentes
console.log(some_obj.say.apply(my_obj, ['a', 'b', 'c']));
console.log(some_obj.say.call(my_obj, 'a', 'b', 'c'));

console.log(some_obj.say.apply(my_obj, ['Dude II']));
//Haya Dude II, I am a Scripting guru

//arguments object
function f2(){
    return arguments;
}
console.log( f2(1,2,3));    //[Arguments] { '0': 1, '1': 2, '2': 3 }
console.log(typeof f2(1,2,3,4));    //object

//convertendo argumentos para array
function f3(){
    var args = [].slice.call(arguments);
    return args.sort();
}

console.log( f3(1,7,3,8,2,4,9,5));
/*
[
  1, 2, 3, 4,
  5, 7, 8, 9
]
*/