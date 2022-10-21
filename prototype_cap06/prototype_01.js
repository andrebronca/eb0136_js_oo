//pg 201
//Prototype

//prototype property de funções
function foo(a, b){
    return a * b;
}
console.log( foo.length );  // 2
console.log( foo.constructor ); //[Function: Function]
console.log( typeof foo.prototype );    //object
//como-se tivesse sido escrito: foo.prototype = {};

//adding methods and properties using the prototype
function Gadget(name, color){
    this.name = name;
    this.color = color;
    this.whatAreYou = function(){
        return 'I am a '+ this.color +' '+ this.name;
    };
}

//adicionando propriedades para Gadget
Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;
Gadget.prototype.getInfo = function(){
    return 'Rating: '+ this.rating +', price: '+ this.price;
};

//alternativamente é possível sobrescrever o prototype
/*
Gadget.prototype = {
    price: 100,
    rating: ...
};
*/

//using the prototype's methods and properties
var newtoy = new Gadget('webcam','black');
console.log(newtoy.name);       //webcam
console.log(newtoy.color);      //black
console.log(newtoy.whatAreYou());   //I am a black webcam
console.log(newtoy.price);      //100
console.log(newtoy.rating);     //3
console.log(newtoy.getInfo());  //Rating: 3, price: 100

Gadget.prototype.get = function(what){
    return this[what];
};

console.log(newtoy.get('price'));   //100
console.log(newtoy.get('color'));   //black

console.log(newtoy.constructor === Gadget); //true
console.log(newtoy.constructor.prototype.rating);   //3
console.log(newtoy.toString()); //[object Object]

//prototype's property with an own property
Gadget.prototype.name = 'mirror';
console.log(newtoy.name);   //webcam
console.log(newtoy.hasOwnProperty('name')); //true

delete newtoy.name;
console.log(newtoy.name);   // mirror
console.log(newtoy.hasOwnProperty('name')); //false

console.log(
newtoy.toString(),
newtoy.hasOwnProperty('toString'),
newtoy.constructor.hasOwnProperty('toString'),
newtoy.constructor.prototype.hasOwnProperty('toStrng'),
Object.hasOwnProperty('toString'),
Object.prototype.hasOwnProperty('toString')
);
//[object Object] false false false false true

//Enumerating properties
//listar todas as propriedades de um objeto: for...in
var params = {
    productid: 666,
    section: 'products',
};

var url = 'http://exame.org/page.php?',
    i,
    query = [];

for(i in params){
    query.push(i +'='+ params[i]);
}

console.log(query);     //[ 'productid=666', 'section=products' ]
url += query.join('&');
console.log(url);   //http://exame.org/page.php?productid=666&section=products

function Gadget2(name, color){
    this.name = name;
    this.color = color;
    this.getName = function(){
        return this.name;
    };
}

Gadget2.prototype.price = 100;
Gadget2.prototype.rating = 3;

var newtoy2 = new Gadget2('mouse','black');

//ver todas as propriedades do objeto
for(var p in newtoy2){
    console.log(p +' = '+ newtoy2[p]);
}
/*
name = mouse
color = black
getName = function(){
        return this.name;
    }
price = 100
rating = 3
*/

//distinguir propriedade do protótipo e do objeto
console.log(newtoy2.hasOwnProperty('name'));    //true
console.log(newtoy2.hasOwnProperty('price'));   //false
//Os protótipos sempre retorna false com: hasOwnProperty()
//então se é false, é uma propriedade do protótipo e não do objeto

//exibindo somente propriedades de objetos
for( var p in newtoy2){
    if (newtoy2.hasOwnProperty(p)){
        console.log(p +' = '+ newtoy2[p]);
    }
}
/*
name = mouse
color = black
getName = function(){
        return this.name;
    }
*/

//propriedades que foram definidas no objeto, retorna true
//propriedades incorporadas no objeto (herança), retorna false
console.log(newtoy2.propertyIsEnumerable('name'));  // true
console.log(newtoy2.propertyIsEnumerable('constructor'));   // false
console.log(newtoy2.propertyIsEnumerable('price')); // false

//se for verificar do protótipo o retorno é diferente
console.log(
    newtoy2.constructor.prototype.propertyIsEnumerable('price')
);  // true