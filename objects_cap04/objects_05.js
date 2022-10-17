//pg 129
//passing objects
var origiginal = {howmany: 1};
var mycopy = origiginal;
console.log(mycopy.howmany);    //1
mycopy.howmany = 100;
console.log(mycopy.howmany);    //100

var nullify = function(o){ o.howmany = 0; };
nullify(origiginal);
console.log(origiginal.howmany);    //0

//comparing objects
var fido = {breed: 'dog'};
var benji = {breed: 'dog'};
console.log( benji === fido );  //false
console.log( benji == fido );   //false

var mydog = benji;
console.log( mydog === benji );     //true
console.log( mydog == benji );      //true
console.log( mydog === fido );      //false


