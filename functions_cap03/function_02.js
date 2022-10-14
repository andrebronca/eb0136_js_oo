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