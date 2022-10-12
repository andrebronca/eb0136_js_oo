//pg 55

//declarando um array vazio
var a = [];
//array com elementos
var a1 = [1,2,3];
console.log('['+ a1[0] +','+ a1[1] +','+ a1[2] +']');   //[1,2,3]
console.log(a1);    //[ 1, 2, 3 ]

//adicionando/atualizando valores
a1[0] = 'oi';
console.log(a1);    //[ 'oi', 2, 3 ]

//adicionando um novo índice
a1[3] = "tchau";
console.log(a1);    //[ 'oi', 2, 3, 'tchau' ]

//adicionando index com um intervalo maior, terá valores undefined
a1[6] = 'fim'
console.log(a1);    //[ 'oi', 2, 3, 'tchau', <2 empty items>, 'fim' ]
console.log(a1[4]);     //undefined

//deletando (não muda o tamanho, então fica um 'buraco' no array
delete a1[1];
delete a1[5];
console.log(a1);    //[ 'oi', <1 empty item>, 3, 'tchau', <2 empty items>, 'fim' ]
delete a1[6];
console.log(a1);    //[ 'oi', <1 empty item>, 3, 'tchau', <3 empty items> ]

//arrays podem conter todos os tipos de dados, inclusive array
var a2 = [1, 'two', false, null, undefined];
a2[5] = a1;
console.log(a2);
/*
[
  1,
  'two',
  false,
  null,
  undefined,
  [ 'oi', <1 empty item>, 3, 'tchau', <3 empty items> ]
]
*/

//criando uma matriz
var a3 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(a3);
console.log(a3[0]);     //[ 1, 2, 3 ]
console.log(typeof a3);     //object
console.log(typeof a3[0]);  //object
console.log(a3[1][1]);  //5

//string também aceitam a notação de array, com índice
var a4 = 'javascript';
console.log(a4[0] + a4[1] +a4[2] +a4[3]);   //java
