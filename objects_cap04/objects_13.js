//pg 165
//Math
//não é uma funcão, não pode ser invocado com: new
//constantes
console.log( Math.PI );     //3.141592653589793
console.log( Math.SQRT2);   //1.4142135623730951
console.log( Math.SQRT3);   //undefined

console.log( Math.E );  //2.718281828459045 (constante de Euler)
console.log( Math.LN2 );    //0.6931471805599453 (logarítmo de 2)
console.log( Math.LN10 );   //2.302585092994046 (logarítmo de 10)

//criando um número aleatório entre 0 e 1
console.log( Math.random());    //0.8703010477225579
//entre 0 e 100
console.log( 100 * Math.random() ); //45.55186360172616

/*
Gerar números entre dois valores, fórmula
( (max - min) * Math.random()) + min
ex.: entre 2 e 10
( (10 - 2) * Math.random()) + 2
*/
console.log( 8 * Math.random() + 2) //7.421462117467936

//arredonda para baixo
var nr = 7.421462117467936;
console.log( Math.floor( nr ));    // 7

//arredonda para cima
console.log( Math.ceil( nr )); // 8

//arredonda para o mais próximo
console.log( Math.round( nr ));    // 7

//calcular a potencia
console.log( Math.pow(2,8));    //256 (2 elevado a 8)

//raiz quadrada de um número
console.log(Math.sqrt(9));  //3
console.log(Math.sqrt(10)); //3.1622776601683795