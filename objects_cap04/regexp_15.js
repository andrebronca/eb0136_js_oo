//pg 172
//RegExp
//javascript usa o Perl 5 syntax
//construtor que premite criar regular expressíons

var re1 = new RegExp('j.*t');   //precisa estar entre: ''
//regexp literal notation
var re2 = /j.*t/;
/*
significa: compare qualquer string que inicia com j e termina com t,
e tenha zero ou mais caracteres entre j e t
'*' significa: zero ou mais do precedente
'.' significa: qualquer caracter
*/

//properties of RegExp objects
/*
global (g): padrão false: a busca para quando a primeia ocorrência é encontrada
    true: encontrar todas as comparações
ignoreCase (i): padrão false: a busca é case-sensitive
lastIndex: a posição em que inicia a busca, o padrão é 0
source: contém o pattern da busca

exceto (lastIndex) as outras não podem ser alteradas depois de criado o objeto

g (global)
i (ignoreCase)
m (multiline)
*/

var re3 = new RegExp('j.*t', 'gmi');
console.log(re3.global);    //true
//regex literal
var re4 = /j.*t/ig;
console.log(re4.global, re4.ignoreCase);    //true true

//Methods of RegExp objects
/*
test() : retorna true or false caso encontre
exec() : retorna um array do que foi encontrado
*/

console.log( /j.*t/.test('Javascript') );   //false
console.log( /j.*t/i.test('Javascript') );  //true
console.log( /j.*t/i.exec('Javascript'));
//[ 'Javascript', index: 0, input: 'Javascript', groups: undefined ]

//String methods that accept regular expressions as arguments
/*
match() : retorna um array do que foi encontrado
search() : retorna a posição do primeiro padrão localizado
replace() : substitui texto comparado com outro
split() : aceita regexp quando dividindo string em array
*/

var s = new String('HelloJavaScriptWorld');
var s1 = s.match(/a/);
console.log( s1 , typeof s1);
//[ 'a', index: 6, input: 'HelloJavaScriptWorld', groups: undefined ] object

console.log( s.match(/a/g));    //[ 'a', 'a' ]
console.log( s.match(/j.*a/i));
//[ 'Java', index: 5, input: 'HelloJavaScriptWorld', groups: undefined ]

console.log( s.search(/j.*a/i));    //5 (posição de início)

//substitui todas as letras maiúsculas por um 'vazio'
console.log( s.replace(/[A-Z]/g, ''));  //elloavacriptorld
console.log( s.replace(/[A-Z]/, ''));   //elloJavaScriptWorld

//localizando uma comparação e adicionando um caracter antes e mantendo
//a comparação
console.log( s.replace(/[A-Z]/g, '_$&'));   //_Hello_Java_Script_World

//retirando o nome antes do '@'
var email = 'bronca.andre@gmail.com';
var user_name = email.replace(/(.*)@.*/,'$1');
console.log(user_name);

//replace callbacks
function replaceCallBack(match){
    console.log(match); //H J S W
    return '_' + match.toLowerCase();
}


console.log( s.replace(/[A-Z]/g, replaceCallBack) );
//_bronca.andre
console.log( email.replace(/(.*)@.*/, replaceCallBack('$1')) );

var glob;
var re5 = /(.*)@(.*)\.(.*)/;    //algo@algo.algo
var callback = function(){
    glob = arguments;
    return arguments[1] +' at '+ arguments[2] +' dot '+ arguments[3];
};

console.log( email.replace(re5, callback));
//bronca.andre at gmail dot com
console.log( glob );
/* O que o replace envia para o callback depois de avaliar a expressão regular
[Arguments] {
  '0': 'bronca.andre@gmail.com',    (parameter is the match)
  '1': 'bronca.andre',  (string matched by any groups)
  '2': 'gmail', (string matched by any groups)
  '3': 'com',   (string matched by any groups)
  '4': 0,   (position of the match)
  '5': 'bronca.andre@gmail.com' (string being searched)
}
*/
console.log(typeof glob);   //object