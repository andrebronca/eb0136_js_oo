//pg 101
//Closures
var a = 1;
function f(){
    var b = 1;
    return a;
}
console.log( f() ); //1

//encadeamento pode ter vários níveis
//inner_local não é vista fora da sua função
var global = 1;
function outer(){
    var outer_local = 2;
    function inner(){
        var inner_local = 3;
        return inner_local + outer_local + global;
    }
    return inner();
}
console.log( outer() ); //6

//breaking the chain with a closure

var a1 = "global variable";
var f = function(){
    var b = "local variable";
    var n = function(){
        var c = "inner local";
    };
};

console.log(f); //[Function: f]
console.log(f());   //undefined

//Closure #1
var a2 = "global variable";
var f2 = function(){
    var b = 'local variable f2';
    var n = function(){
        var c = 'inner local';
        return b;
    };
    return n;
};

var inner = f2();
console.log( inner() ); //local variable f2

//Closure #2
var inner2; //placeholder
var f3 = function(){
    var b = 'local variable f3';
    var n = function(){
        return b;
    };
    inner2 = n;
};

console.log( f3() );    //undefined
console.log( inner2 );      //[Function: n]
console.log(typeof inner2 );    //function
console.log(inner2());  //local variable f3

//Closure #3
function f4(param){
    var n = function(){
        return param;
    };
    param++;
    return n;
}

var inner4 = f4(10);
console.log( inner4() );    //11

//closure in a loop
function f5(){
    var arr = [], i;
    for(i = 0; i < 3; i++){
        arr[i] = function(){
            return i;
        };
    }
    return arr;
}

var arr = f5();
console.log(arr[0]());  //3
console.log(arr[1]());  //3
//a referência ocorre para o último valor de 'i' dentro do escopo da função

//corrigindo o problema da f5()
function f6(){
    var arr = [], i;
    for(i = 0; i < 3; i++){
        arr[i] = (function(x){
            return function(){
                return x;
            };
        }(i));
    }
    return arr;
}

var arr = f6();
console.log( arr[0]());     //0
console.log( arr[1]());     //1
console.log( arr[2]());     //2

function f7(){
    function binder(x){
        return function(){
            return x;
        };
    }
    var arr = [], i;
    for(i = 0; i < 3; i++){
        arr[i] = binder(i);
    }
    return arr;
}

var arr = f7();
console.log( arr[0]());     //0
console.log( arr[1]());     //1
console.log( arr[2]());     //2

//getter and setter - closure
var getValeu, setValue;
(function(){
    var secret = 0;
    getValue = function(){
        return secret;
    };

    setValue = function(v){
        if (typeof v === "number"){
            secret = v;
        }
    };
}());

console.log( getValue() );  //0
setValue(123);
console.log( getValue() );  //123
setValue(false);
console.log( getValue() );  //123
