//pg 80
//predefined functions
//parseInt()
//recebe uma string e tenta converter para inteiro
//se toda a operação falhar, retorna NaN
console.log('parseInt()');
console.log( parseInt('123'));      //123
console.log( parseInt('abc123'));   //NaN
console.log( parseInt('1abc23'));   //1
console.log( parseInt('123abc'));   //123
//aceita um segundo argumento que define o índice do tipo de string
//decimal, hexadecimal, binary, octal
console.log( parseInt('FF', 10));   //NaN
console.log( parseInt('FF', 16));   //255
console.log( parseInt('0377', 10)); //377
console.log( parseInt('0377', 8));  //255
//se omitir o segundo argumento por padrão o índice será na base 10
//se a string iniciar com 0x será usado base 16, se iniciar com zero será base 8
console.log( parseInt('377'));      //377
console.log( parseInt(0o377));      //255
console.log( parseInt('0x377'));    //887

//obs.: é ideal sempre passar o índice que deseja para evitar problemas

//parseFloat()
console.log('parseFloat()');
console.log( parseFloat('123'));    //123
console.log( parseFloat('1.23'));   //1.23
console.log( parseFloat('1.23abc.00')); //1.23
console.log( parseFloat('a.bc1.23'));   //NaN
console.log( parseFloat('a123.34'));    //NaN
console.log( parseFloat('12a3.34'));    //12
//parseFloat entende expoentes
console.log( parseFloat('123e-2'));     //1.23
console.log( parseFloat('1e10'));       //10_000_000_000
//parseInt não entende expoentes
console.log( parseInt('1e10'));     //1


//isNaN()
console.log('isNaN()');
console.log( isNaN(NaN));   //true
console.log( isNaN(123));   //false
console.log( isNaN(1.23));  //false
console.log( isNaN(parseInt('abc123')));    //true
console.log( isNaN('1.23'));    //false
console.log( isNaN('a1.23'));   //true
//obs.: NaN === NaN -> false (NaN não é igual a nada). A função é útil para validar.


//isFinite()
//checa se o valor não é Infinity e nem NaN
console.log('isFinite()');
console.log( isFinite(Infinity));   //false
console.log( isFinite(-Infinity));  //false
console.log( isFinite(12));     //true
console.log( isFinite(1e308));  //true
console.log( isFinite(1e309));  //false

//Encode/decode URIs
var url = 'http://www.packtpub.com/script.php?q=this and that';
var encode = encodeURI(url);
var encodeComp = encodeURIComponent(url);
console.log( encode );
console.log( encodeComp );
console.log( decodeURI(encode));
console.log( decodeURIComponent(encodeComp));
//obs.: escape(), undescape() são deprecated

//eval()
//evitar usar por questões de segurança e performance
var e = eval('var ii = 2;');
console.log(e);     //undefined
console.log(ii);    //2

//alert()
//não faz parte do javascript, é fornecido pelo browser do host
//não é executado pelo node
//alert('Não sou nativo do JavaScript');
//obs.: não usar com thread ou ajax, pois causa um bloqueio

//scope of variables
var global1 = 1;
function f(){
    var local1 = 2;
    global1++;
    return global1;
}
console.log(f());   //2
console.log(global1);   //2
console.log(f());   //3
//console.log(local1);    //ReferenceError: local1 is not defined
if (true){
    var local2 = '_true_';
}
console.log(local2);    //_true_

for(var i = 0; i < 5; i++){
    var local3 = 0;
    local3 += i;
}
console.log(local3);    //4

function f2(){
    global2 = 0;
    return global2++;
}
//console.log(global2);   //ReferenceError: global2 is not defined
//variável só se torna global depois da chamada da função
console.log(f2());  //0
console.log(global2);   //1
//Obs.: Uma boa prática é sempre usar 'var' para declarar variáveis e
//padronizar onde elas ficam. Não usar o 'var' pode ocasionar de
//ter bugs difíceis de serem descobertos, conflitos de nomes.
