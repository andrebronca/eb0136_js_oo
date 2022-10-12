//pg 71
// 1) qual é o resultado de cada expressão?
var a;
console.log('typeof a: '+ typeof a);    //undefined (c)
var s = '1s';
console.log('s: '+ s);
s++;
console.log('s++: '+ s);    //NaN (c)
console.log('!!"false": '+ !!"false");  //true (c)
console.log('!!undefined: '+ !!undefined);  //false (c)
console.log('typeof -Infinity: '+ typeof -Infinity);    //Infinity (e: number)
console.log('10 % "0": '+ 10 % "0");    //0 ou 10 (e: NaN)
console.log('undefined == null: '+ undefined == null);  //false (c)
console.log('false === "": '+ false === "");    //true (e: false)
console.log('typeof "2E+2": '+ typeof "2E+2");  //Number (e: string)
a = 3e+3;
console.log('a: '+ a);  //3000 (c)
a++;
console.log('a++: '+ a);    //3001 (c)
//Lembrar que: typeof não faz conversão
//expressão matemática faz conversão, 10 % "0" = NaN e 10 % 0 = NaN
//Um nr dividido por zero é: Infinity
//null é um valor atribuido a objeto, undefined não tem nada e é para tipos primitivos
//booleano não é o mesmo tipo que uma string, === não faz conversão de tipo
//Infinity é sempre Number


// 2) qual é o valor de v?
var v = v || 10;
console.log(v);     //10 (c)

// 3) escreva um pequeno programa que imprime uma tabela de multiplicação.
//vou fazer função

function tabuada(nr){
    for(var i = 1; i <= 10; i++){
        console.log(nr +' x '+ i +' = '+ (nr * i));
    }
}

for(var i = 1; i <= 10; i++){
    tabuada(i);
    console.log('-----------');
}
