//pg 59
/*
if : condições
switch : declarações
while, do..while, for, for..in : laços
*/

//bloco de códigos
{
    var a = 1;
    var a1 = 3;
}

//blocos podem ser aninhados
{
    var a2 = 1;
    var a3 = 3;
    var a4, a5;
    {
        a4 = a2 + a3;
        {
            a5 = a2 - a3;
        }
    }
}

// if
var result = '', b = 3, c = 4;
if (b > 2){
    result = 'b > 2';
}
console.log(result);    //b > 2

if (b > 2){
    result = 'b is greater than 2';
} else {
    result = 'b is not greater than 2';
}
console.log(result);    //b is greater than 2

if (b > 2 || b < -2){
    console.log('b is not between -2 and 2');   //b = 3
} else if (b === 0 && c === 0){
    console.log('b and c are zeros');
} else if (b === c){
    console.log('b and c are equal');
} else {
    console.log('I give up');
}

if (b === 3){
    if (c === 4){
        console.log('b vale 3, c vale 4');  //true
    } else {
        console.log('c não vale 4, pode ser qualquer coisa');
    }
} else {
    console.log('b não vale 3, pode ser qualquer outra coisa');
}

//checando se uma variável existe
var r1 = '';
//comentar o if pra prosseguir, descomentar para testar
/*
if(r2){         //ReferenceError: r2 is not defined
    r1 = 'yes';
}
*/
console.log(r1);    //'' (significa que o if acima retornou false, mas deu tbm erro.

//verificando de uma forma segura, sem dar erro na aplicação
if (typeof r2 !== 'undefined'){
    r1 = 'yes';
}
r1 = 'vazio';   //apenas para exibir algo na tela
console.log(r1);    //vazio

var r2 = undefined;

//usando ternário na função
function verificaVariavel(value){
    return typeof value !== 'undefined' ? true : false;
}

function verificaVariavel2(value){
    return typeof value !== 'undefined';
}

if ( verificaVariavel(r2) ){
    r1 = 'yes';
}
console.log(r1);    //vazio

if ( verificaVariavel2(r2) ){
    r1 = 'yes';
}
console.log('r1: '+ r1);    //vazio

r2 = 123;
if ( verificaVariavel(r2) ){
    r1 = 'yes';
}
console.log(r1);    //yes

function existeValorNaVariavel(v){
    return typeof v !== 'undefined' ? 'sim' : 'nao';
}

console.log(existeValorNaVariavel(r1)); //sim

