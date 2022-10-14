console.log(Number.isNaN('test'));
console.log(Number.isNaN(123));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(12/'abc'));
console.log(isNaN('test'));

//melhor usar: Number.isNaN()
//sugestão do Mozilla
function isNumber(value){
 return typeof value === 'number' && !Number.isNaN(value);
}

console.log(Number.isInteger('test'));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(123));
console.log(Number.isInteger(1.23));
console.log(Number.isInteger(1e2));
console.log(Number.isInteger(1e-2));

var s1 = "algum texto";
var s2 = 'algum texto';
var s3 = '3.14';
var s4 = "3.14";
var s5 = "";
var s6 = '';
var s7 = s3 + s4;
console.log(typeof s1);
console.log(typeof s2);
console.log(typeof s3);
console.log(typeof s4);
console.log(typeof s5);
console.log(typeof s6);
console.log(s1 +','+ s3);
console.log(typeof s7);

//String conversions
//em uma expressão quenão tem adição: '2' * = 6;  são convertidos
//'2'+'3' = '23' ; não é convertidporque é ambinguo
var a1 = '2';
var a2 = 3;
var a3 = '10';
console.log(a2);
a2 *= a1;
console.log(a2);
console.log(typeof a2);
console.log('a1: '+ a1);
a1++;
console.log('a1: '+ a1);
//converter multiplicando por 1
console.log(typeof a3);
a3 *= 1;
console.log(typeof a3);
//se a conversão falhar, resulta em: NaN
//outra forma de tentar converter é usar; parseInt()
var a4 = '12 é uma dúzia';
console.log(a4 * 1);
//converter um número para string, basta concatenar com uma string vazia
var a5 = a2 +'';
console.log(typeof a5);

//Special strings: escape character
console.log('I don\'t know');
console.log("I don't know");
console.log('"Hello", he said.');
console.log("\"Hello\", he said.");
console.log('1\\2');
console.log('\nQuebra de linha\nOutra\nMais uma');

console.log('tab: \ttab');
console.log('unicode: \u044f');

//String template literals
var log_level = "debug";
var log_message = "meltdown";
console.log("Log level: "+ log_level +" - message: "+ log_message);
//template, uso de acento grave `${}`
console.log(`Log level: ${log_level} - message: ${log_message}`);
var b1 = 10;
var b2 = 10;
console.log(`Sum is ${b1 + b2} and Multiplication would be ${b1 * b2}.`);
//chamada de função
function sum(x,y){
 return x + y;
}
function multi(x,y){ 
 return x*y; 
}
console.log(`Sum is ${sum(b1,b2)} and Multiplication would be ${multi(b1,b2)}.`);
console.log(`Linha 1 \nLinha 2 \tTab`);

