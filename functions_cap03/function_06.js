//pg 110
//Iterator
function setup(x){
    var i = 0;
    return function(){
        return x[i++];
    };
}

var next = setup(['a', 'b', 'c']);

console.log( next());   // a
console.log( next());   // b
console.log( next());   // c

//IIFE vs blocks
/*
ES5 not provide block scope, than use: Immediately Invoked Function Expressions
*/
(function(){
    var block_scoped = 0;
}());
//console.log(block_scoped);  //ReferenceError: block_scoped is not defined
//var é pra criar uma variável global, usando o padrão IIFE é possível
//ter uma variável de escopo

//ES6 use let or const

//Arrow functions
//um exemplo em jquery com função anonima
/*
$("#submit-btn").click(function (event){
    validateForm();
    submitMessage();
});
*/

const num = [1,2,3];
const squares = num.map(function(n){
    return n * n;
});
console.log(squares);   //[ 1, 4, 9 ]

const squares2 = num.map(n => n * n);
console.log(squares2);  //[ 1, 4, 9 ]

/* se tiver mais de uma linha de expressão, envolver em {}
() => {...}
a => {...}
(a,b) => {...}
*/

/*
n => { return n + n }   statement block
n => n + n              expression
*/

