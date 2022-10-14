//página 46
//booleans
var a = true;
console.log(typeof a);
var b = false;
console.log(typeof b);
var c = "true";
console.log(typeof c);

//logical operators
//invertendo o valor booleano
var a2 = !a;
console.log(a +', '+ a2);
//obtendo o valor original, negando duas vezes (não altera o valor)
console.log(!!a2);
//se usar um operador lógico o valor é convertido para boolean
var d = "javascript";
console.log(typeof d +', '+ d);
var d1 = !d;
console.log(typeof d1 +', '+ d1);
var d2 = !!d;
console.log(typeof d2 +', '+ d2);

//valores que retornam false
function booleano(value){
    return value ? true : false;
}

console.log(booleano(''));
console.log(booleano(null));
console.log(booleano(undefined));
console.log(booleano(0));
console.log(booleano(NaN));
console.log(booleano(false));
console.log(booleano('0'));

//tabela verdade para:
// && and
// || or

//precedência
// 1º: !, 2º &&, 3º ||

console.log(true || false || true || false || true);    //true
console.log(true || "alguma_coisa");    //true
console.log(true && "alguma_coisa");    //alguma_coisa
console.log(true && "algo" && true);    //true

//atribuindo um valor padrão (algo que não deve ser confiável)
var n = n || 10;
console.log(n);
var n2 = 0;
var n2 = n2 || 11;  //perde o valor zero
console.log(n2);

//comparação
//valores são convertidos para o mesmo tipo e depois convertidos
console.log(1 == 1);    //true
console.log(1 == 2);    //false
console.log(1 == '1');  //true

//comparação em que avalia igualdade e tipo, não há conversão de tipos
console.log(1 === 1);   //true
console.log(1 === '1'); //false

//possui conversão de tipo
console.log(1 != 1);    //false
console.log(1 != '1');  //false
console.log(1 != 2);    //true

//sem conversão de tipo
console.log(1 !== 1);   //false
console.log(1 !== '1'); //true

console.log(1 > 2);     //false
console.log(1 > 0);     //true
console.log(1 >= 1);    //true
console.log(1 >= 2);    //false
console.log(1 < 2);     //true
console.log(1 <= 2);    //true
console.log(1 <= 0);    //false

//NaN não é igual a nada
console.log(NaN == NaN);    //false
console.log(NaN === NaN);   //false

//undefined and null
//console.log(x); //ReferenceError: x is not defined (tentando usar uma varável que não existe)
console.log(typeof x);  //undefined
var x;
console.log(typeof x);  //undefined (mesmo depois de declarada, não tem valor atribuido)
//javascript automaticamente inicializa com: undefined
console.log(x === undefined);   //true

//null não é atribuido pelo javascript
var y = null;
console.log(y);         //null
console.log(typeof y);  //object

//convertendo para Number
console.log(1 + undefined);     //NaN
console.log(1 + null);          //1
console.log(1 * undefined);     //NaN
console.log(1 * null);          //0

//convertendo para Boolean
console.log(!undefined);    //true
console.log(!!undefined);   //false
console.log(!null);     //true
console.log(!!null);    //false

//convertendo para Stsring
console.log("value: "+ null);       //value: null
console.log('value: '+ null);       //value: null
console.log('value: '+ undefined);  //value: undefined


//symbols (não usam o operador new)
//symbolos são únicos e imutáveis (parecem constantes)
//quando precisar de identificador único deve ser usado symbol
var atom = Symbol();
console.log(atom);          //Symbol()
console.log(typeof atom);   //symbol

var atom2 = Symbol('atomic symbol');
console.log(Symbol() === Symbol());         //false
console.log(Symbol('a') === Symbol('a'));   //false