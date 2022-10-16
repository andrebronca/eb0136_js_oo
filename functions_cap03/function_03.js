//pg 87
//hoisting
var a = 123;
function f(){
    //alert(a);
    console.log(a); //undefined
    var a = 1;
    //alert(a);
    console.log(a); //1
}
f();
/* Acontece que a função tem uma variável com o mesmo nome
de uma global. Então ocorro o hoisting, pois o escopo
local é mais importante.
a variável é criada e colocada no topo da função, porém,
sua atribuição é mantida onde foi definida.
como se tivesse sido escrita:
function f(){
    var a;
    console.log(a); //undefined
    a = 1;
    console.log(a); //1
}
*/

//ES6
//Escopo de bloco: 'let'
var b = 1;
{
    let b = 2;
    console.log(b); //2
}
console.log(b); //1

function swap(a, b){
    if(a > 0 && b > 0){
        let tmp = a;
        a = b;
        b = tmp;
    }
    console.log(a, b);
//    console.log(tmp); //somente no bloco : ReferenceError: tmp is not defined
    return [a,b];
}
console.log(swap(1,2)); // [2, 1]
//declaração com 'let' ocorre o hoisted no bloco
//com 'let' ocorre erro se for chamada antes de declarada

//ES6
//const
//escopo de bloco, tem que ter atribuição na declaração
//depois de atribuída não pode ser redefinida
const car = {};
car.tyres = 4;
console.log(car);   //{ tyres: 4 }

//functions are data
//f as function
var f = function(){ //função não nomeada
    return 1;
};
console.log(f());   //1

var f2 = function myFunc(){ return 1; };
console.log( f2() );        //1
console.log(typeof f2);     //function
console.log(typeof swap);   //function

//anonymous functions
var sum = function (a, b){
    return a + b;
};

var add = sum;
console.log(typeof add);    //function
console.log( add(1, 2));    //3

//callback functions
function invokeAdd(a, b){
    return a() + b();
}

function one(){
    return 1;
}
function two(){
    return 2;
}

console.log(invokeAdd(one, two));   //3

console.log( invokeAdd(
        function(){return 2;},
        function(){return 3;})
        ); //5

console.log( invokeAdd(
        function(){
            return 3;
        },
        function(){
            return 4;
        }
        )); //7

function multiplyByTwo(a, b, c){
    var i, ar = [];
    for(i = 0; i < 3; i++){
        ar[i] = arguments[i] * 2;
    }
    return ar;
}

function addOne(a){
    return a + 1;
}

console.log( multiplyByTwo(1,2,3)); //[2,4,6]
console.log( addOne(100));          //101

var myarr = [];
myarr = multiplyByTwo(10,20,30);
console.log(myarr);     //[20,40,60]
for(var i = 0; i < myarr.length; i++){
    myarr[i] = addOne(myarr[i]);
}
console.log(myarr);     //[21,41,61]

function multiplyByTwo2(a, b, c, callback){
    var i, ar = [];
    for(i = 0; i < 3; i++){
        ar[i] = callback(arguments[i] * 2);
    }
    return ar;
}

var myarr2 = multiplyByTwo2(1,2,3,addOne);
console.log(myarr2);    //[3,5,7]

console.log(
    multiplyByTwo2(3,4,5, function (a){
        return a + 2;
    })
);  //[8,10,12]