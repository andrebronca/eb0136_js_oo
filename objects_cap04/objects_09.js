//pg 146
//Array.from

//antes do ES6, obter os argumentos
function toArray(args){
    var result = [];
    for(var i = 0, len = args.length; i < len; i++){
        result.push(args[i]);
    }
    return result;
}

function doSomething(){
    var args = toArray(arguments);
    console.log(args);
}

doSomething('hellow', 'world');     //[ 'hellow', 'world' ]

//com ES6, converter objetos do tipo array em array
function doSomething2(){
    console.log(Array.from(arguments));
}

doSomething2('hellow','javascript');    //[ 'hellow', 'javascript' ]

//mapping scheme
function doSomething3(){
    console.log(Array.from(arguments, e => e + ' mapped'));
//    console.log(Array.from(arguments, function(e){ return e +' mapped'; }));
}
doSomething3('um','dois','tres');   //[ 'um mapped', 'dois mapped', 'tres mapped' ]

//creating arrays using Array.of
/* formas de criar um array
new Array(2);       //tamanho será 2
new Array('2');     //o primeiro elemento será uma string
new Array(1,2,3);   //contém 3 elementos
*/
//evitar confusão
let arr = Array.of(1, "2", {obj: '3'});
console.log(arr.length);    //3

//Array.prototype methods
/* todos os métodos retornam um iterator, podem ser usados para
criar arrays usando: Array.from()
Array.prototype.entries()
Array.prototype.values()
Array.prototype.keys()
*/
let arr2 = ['a', 'b', 'c'];
for(const i of arr2.keys()){
    console.log(i);     //0 1 2
}
// 0
// 1
// 2

for(const v of arr2.values()){
    console.log(v);     //a b c
}
// a
// b
// c

for(const [k,v] of arr2.entries()){
    console.log(k, v);
}
// 0 a
// 1 b
// 2 c

/*
Array.prototype.find
Array.prototype.findIndex
*/
let numbers = [1,2,3,4,5,7,8,9,10,6];
console.log( numbers.find(n => n > 5));     //7 (primeiro elemento > 5)
console.log( numbers.findIndex(n => n > 5));    //5 (total de elementos > 5)

