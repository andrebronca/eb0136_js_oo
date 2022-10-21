//pg 210
//Using isPrototypeOf() method
var monkey = {
    hair: true,
    feeds: 'bananas',
    breathes: 'air',
};

function Human(name){
    this.name = name;
}
Human.prototype = monkey;

var george = new Human('George');
console.log( monkey.isPrototypeOf(george)); // true
//pra saber se o protótipo é do tipo monkey, tem que perguntar.
//mas como saber qual é quando não desconfia?

console.log( Object.getPrototypeOf(george).feeds);  //bananas
console.log( Object.getPrototypeOf(george) === monkey); // true
//nem todos os browsers implementam: getPrototypeOf()

//the secret __proto__ link
var monkey2 = {
    feeds: 'bananas',
    breathes: 'air'
};

function Human(){}
Human.prototype = monkey2;

var developer = new Human();
developer.feeds = 'pizza';
developer.hacks = 'JavaScript'; //property of developer

console.log( developer.hacks ); //JavaScript
console.log( developer.feeds ); //pizza
console.log( developer.breathes );  //air

console.log(developer.__proto__ === monkey2);   //true
//__proto__ não é reconhecida por alguns browsers
//__proto__ é mais recomendável para fins de debug
/*
__proto__ é uma propriedade das instâncias
prototype é uma propriedade das funções construtoras
*/

//Augmenting built-in objects
//adicionando uma função para o Array
Array.prototype.inArray = function(needle){
    for(var i = 0, len = this.length; i < len; i++){
        if(this[i] === needle){
            return true;
        }
    }
    return false;
};

//agora todos os tipos arrays possuem o novo método
var colors = ['red','green','blue'];
console.log( colors.inArray('red'));    // true
console.log( colors.inArray('yellow')); // false

//definindo sem olhar o livro
String.prototype.reverseA = function(){
    let str = '';
    for(var i = (this.length - 1); i >= 0; i--){
        str += this[i];
    }
    return str;
};

console.log('javascript'.reverseA());    //tpircsavaj

//agora olhando o que o livro propõe
String.prototype.reverse = function(){
    return Array.prototype.reverse.apply(this.split('')).join('');
};
console.log('JavaScript'.reverse());    //tpircSavaJ
