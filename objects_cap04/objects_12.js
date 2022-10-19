//pg 158
//Boolean
var b = new Boolean();
console.log(typeof b);  //object
console.log(typeof b.valueOf());    //boolean
console.log(b.valueOf());   //false

//usando sem o new, converte não-booleans para booleans
console.log(Boolean('oi')); //true
console.log(Boolean(''));   //false
console.log(Boolean({}));   //true

console.log(Boolean(new Boolean(false)));   //true
//quando passa um objeto é retornado true
//é menos confuso trabalhar com boolean primitivo

//Number
//aqui tenta converter qualquer argumento para number
var n = Number('12.12');
console.log(n);             //12.12
console.log(typeof n);      //number

//aqui cria um objeto do tipo number e tenta converter
var n2 = new Number('12.12');
console.log(n2, typeof n2);     //[Number: 12.12] object

var n3 = new Number('dez');
console.log(n3,',', typeof n3);     //[Number: NaN] object

//constantes em number que não podem ser alteradas
console.log(Number.MAX_VALUE);  //1.7976931348623157e+308
console.log(Number.MIN_VALUE);  //5e-324
console.log(Number.POSITIVE_INFINITY);  //Infinity
console.log(Number.NEGATIVE_INFINITY);  //-Infinity
console.log(Number.NaN);    //NaN

var n4 = new Number(123.456);
console.log(n4.toFixed(1));     //123.5
//criando e destruindo Number para usar os métodos
console.log( (12345).toExponential() ); //1.2345e+4

//toString() do Number, aceita um radix parametro, 10 é o padrão
var n5 = new Number(255);
console.log(n5.toString(), n5.toString(10), n5.toString(16));
//255 255 ff
console.log( (3).toString(2) );     //11
console.log( (12345).toString(2) ); //11000000111001

//String
var primitive = 'Hello';
console.log(typeof primitive);  //string
var obj = new String('world');
console.log(typeof obj);        //object
//string objects são como array de caracteres
console.log(primitive.length, primitive[1]);    //5 e
console.log(obj.length, obj[1]);    //5 o

//converter objeto string para primitivo tem 3 formas
console.log(obj.valueOf());     //world
console.log(obj.toString());    //world
console.log(obj +'');   //world

console.log(obj);   //[String: 'world']

//tratando uma string primitiva como objeto
//o objeto string é criado e depois destruído
console.log('tomate'.length);   //6
console.log('tomate'[0]);   //t
console.log('tomate'['tomate'.length - 1]); //e

//verificar a diferença entre primitivo string e objeto string
console.log(Boolean(''));   //false
console.log(Boolean(new String('')));   //true

//String sem o new converte para primitivo
console.log( String(1) );   //1
console.log( String({p: 1}) );  //[object Object]
console.log( String([1, 2, 3]) );   // 1,2,3
console.log( String([1, 2, 3]) === [1, 2, 3].toString() );  //true

//a few methods of string objects
var s = new String('Couch potato');
console.log(s,s.valueOf(), s.toUpperCase(), s.toLowerCase());
//[String: 'Couch potato'] Couch potato COUCH POTATO couch potato

console.log( s.charAt(6), s[6]);    // p p
console.log( s.charAt(s.length + 10));  //retorna vazio passando uma posição que não existe

//retorna o índice onde está a busca e ocorre a primeira aparição
console.log( s.indexOf('C'), s.indexOf('h'));   //0 4
//pesquisando a partir de que posição procurar
console.log( s.indexOf('o',2));     // 7

//a última ocorrência, em que índice ocorre
console.log( s.lastIndexOf('o'));   //11

//procurando por strings é case-sensitive, e retorna o início da string
console.log( s.indexOf('Couch'));   //0
console.log( s.indexOf('potato'));  //6
console.log( s.indexOf('home'));    //-1 (não encontrou nada)

//ignorando case-sensitive
console.log( s.toLowerCase().indexOf('couch'.toLowerCase()));

//forma correta de comparar
if (s.indexOf('Couch') !== -1){
}

console.log(s.slice(1,5));      //ouch
console.log(s.substring(1,5));  //ouch

console.log(s.slice(1, -1));    //ouch potat
console.log(s.substring(1, -1));    //C
//substring trata índice negativo como zero

//retorna um array a partir de um separador
var s2 = s.split(' ');
console.log(s, ',', s2);    //[String: 'Couch potato'] , [ 'Couch', 'potato' ]

//cria uma string a partir de um array
var s3 = s2.join(',');
console.log(s2, ',', s3);   //[ 'Couch', 'potato' ] , Couch,potato

//concatenando string
console.log(s3.concat('es'));   //Couch,potatoes

