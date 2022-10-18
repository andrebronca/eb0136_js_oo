//pg 140
//Built-in objects

//Data Wrapper objects
//Object, Array, Function, Boolean, Number, String, correspondem aos diferentes
//tipos de dados retornado por typeOf, exceto: undefined, null

//Utility objects
//Math, Date, RegExp, podem ser úteis

//Error objects
//ajudam o o programa a se recuperar caso aconteça algo estranho

//Object
//qualquer objeto criado é hedado dele
var o = {}; //literal notação
var o2 = new Object();  //constructor function
//um objeto vazio já herda propriedades
console.log(o2.constructor);    //[Function: Object]
console.log(o2.constructor());  //{}
console.log(o2.toString());     //[object Object]
console.log(o2);                //{}
console.log(o2.valueOf());      //{}
console.log(o2.valueOf() === o2);   //true
console.log('Objeto: '+ o2.toString());     //Objeto: [object Object]

//Array
//constructor to create arrays
//equivalentes
var a = new Array();
var a1 = [];
a[0] = 1;
a[1] = 2;
a1[0] = 3;
a1[1] = 5;
console.log(a, a1);     //[ 1, 2 ] [ 3, 5 ]

var a3 = new Array(1,2,3,'four');
console.log(a3);        //[ 1, 2, 3, 'four' ]

//um único número é considerado o tamanho do array
var a4 = new Array(5);
console.log(a4);        //[ <5 empty items> ]
console.log(typeof a4); //object
console.log(a4.toString());     //,,,,
console.log(a3.toString());     //1,2,3,four
console.log(a3.constructor());  //[]

console.log(a3.length);         //4
console.log(typeof o.length);   //undefined
a3[4] = 1;
o[0] = 1;
a3.prop = 2;
o.prop = 2;
console.log(a3.length);         //5
console.log(typeof o.length);   //undefined
//em array propriedades string são ignoradas, e numéricas o tamanho é incrementado
//pode ser atribuido o tamanho do array, e os espaços novos serão
//undefined
a3.length = 10;
console.log(a3);    //[ 1, 2, 3, 'four', 1, <5 empty items>, prop: 2 ]
//se a atribuição do tamanho for menor, remove elementos finais

//array methods
var a5 = [3,5,1,7,'test'];
/*
push() : adiciona um novo elemento (retorna o comprimento do array alterado)
a5.push('new') equivalente a5[a5.length] = 'new'
a5.pop() : remove o último elemento (retorna o elemento removido)
at.pop() equivalente a5.length--;
*/
console.log(a5);    //[ 3, 5, 1, 7, 'test' ]
console.log(a5.push('novo elemento'));  //6
console.log(a5);    //[ 3, 5, 1, 7, 'test', 'novo elemento' ]
console.log(a5.pop());  //novo elemento
var a6 = a5.sort();
console.log(a6);    //[ 1, 3, 5, 7, 'test' ]
console.log(a5 === a6);     //true  (apontam para o mesmo array)
console.log(a6.join(';'));  //1;3;5;7;test (retorna o array em formato string com um separador passado no join)

/*
slice() : retorna parte do array, sem alterar o seu tamanho.
índices baseados em zero, tanto início quanto final.
início é incluso, excluído o final
*/
a6 = a5.slice(1,3);
console.log(a6);    //[ 3, 5 ]
console.log(a5);    //[ 1, 3, 5, 7, 'test' ]

/*
splice() : modifica o array original
remove uma parte do array, e retorna
o restante é preenchido com o que sobrar do array
o primeiro é o ponto inicial
o segundo é o tamanho da fatia
o terceiro em diante, são os elementos a serem adicionados
*/

var a7 = a5.splice(1, 2, 100, 101, 102);
console.log(a7);    //[ 3, 5 ]
console.log(a5);    //[ 1, 100, 101, 102, 7, 'test' ]
var a8 = a5.splice(1,5);
console.log(a5);    //[ 1 ]
console.log(a8);    //[ 100, 101, 102, 7, 'test' ]

