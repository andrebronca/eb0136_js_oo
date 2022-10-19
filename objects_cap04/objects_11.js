//pg 155
//lexical this in arrow functions
var greeter = {
    default: 'Hello',
    greet: function(names){
        names.forEach(function(name){
            console.log(this.default + name);   //cannot read property 'default'
        })
        //this ficou fora de alcance
    }
};

//corrigindo a visibilidade do this para a closure
//lexical this
var greeter2 = {
    default: 'Hello',
    greet: function(names){
        let that = this;
        names.forEach(function(name){
            console.log(that.default +' '+ name);
        })
    }
};
console.log(greeter2.greet(['java','javascript']));

//usando arrow function (possuem acesso ao this)
var greeter3 = {
    default: 'Hello',
    greet: function(names){
        names.forEach(name => {
            console.log(this.default +' '+ name);
        })
    }
};
console.log(greeter3.greet(['java','javascript','python']));

//infering object types
//como saber a diferença entre um objet e um array
console.log(typeof {});     //object
console.log(typeof []);     //object
console.log(Object.prototype.toString.call({}));    //[object Object]
console.log(Object.prototype.toString.call([]));    //[object Array]

console.log([1,2,3].toString());    //1,2,3
console.log(Array.prototype.toString.call([1,2,3]));    //1,2,3

//fazendo uma referência
var toStr = Object.prototype.toString;
function arrayOrObject(){
    return toStr.call(arguments);
}
console.log(arrayOrObject());   //[object Arguments]
//console.log(arrayOrObject(document.body));    //testar no console do browser

console.log(arrayOrObject([1,2]));  //[object Arguments]
console.log(arrayOrObject({}));     //[object Arguments]
console.log(toStr.call({}));    //[object Object]
console.log(toStr.call([]));    //[object Array]

//função autoexecutada
(function(){
    return toStr.call(arguments);
}());