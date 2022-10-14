//number
var n = 1;
console.log(typeof n);
n = 1234;
console.log(typeof n);
n = 3.14;
console.log(typeof n);
console.log(typeof 1.5);
console.log(typeof 0);

//octal and hexadecimal numbers
//octal inicia com zero
var n3 = 0377;
console.log(typeof n3);
console.log(n3);

//outra forma de representar número octal
console.log(0o377);
console.log(0O377);

//hexadecimal (hex)
//0x
var n4 = 0x00;
console.log(typeof n4);
console.log(n4);
var n5 = 0xff;
console.log(typeof n5);
console.log(n5);

//binary literals
//0b
//função: parseInt(String, number_index)
console.log(parseInt('111',2));

console.log(0b101);

//Expoent literals
//1e1 = 1e+1 = 1E1 = 1E+1
var n6 = 1e1;	//1 com  '1' zero depois dele = 10
var n7 = 1e3;	//1 com '3' zeros depois dele = 1000 (move 3 dígitos para a direita)
var n8 = 2e3;
var n9 = 2e-3;	//(move 3 dígitos para a esquerda) = 0.002
console.log(typeof 2e3);
console.log(n6 +','+ n7 +','+ n8 +','+ n9);

//Infinity
//valor numérico grande demais para o javascript manipular
//maior valor: 1.7976931348623157e+308
//menor valor: 5e-324
console.log(typeof Infinity);
console.log(typeof 1e308);
console.log(typeof 1e309);
var n10 = 6 / 0;
console.log(n10);	//Infinity
var a1 = -Infinity;
console.log(typeof a1);
console.log(a1);
console.log(Infinity - Infinity);	//Not a Number (NaN)
console.log(-Infinity + Infinity);
//qualquer operação com Infinity resulta em Infinity
console.log(Infinity - 20);
//verificar se um valor é Infinity
isFinite()	//aqui tenta converter para Number
Number.isFinite()	//é mais preciso
console.log('------');
var a2 = 100;
console.log(Number.isFinite(n10));	//false
console.log(Number.isFinite(a2));	//true

//NaN
//�é um valor especial que também é um número
//ocorre quando a operação falha: ex.: 10 * ' = NaN
console.log(typeof NaN);
var a3 = NaN;
console.log(a3);
console.log(typeof a3);
console.log(10 * 'a');
var a4 = 'x';
console.log(10 * a4);
//NaN contagia toda a expressão
console.log(1 + 3 * 2 + 1e2 / 3 * NaN);
