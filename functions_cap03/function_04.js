//pg 96

//Immediate functions
//chamando uma função logo após ser definida
//mais adequadas para tarefas pontuais ou de inicialização
//não são executadas duas vezes
(
    function(){
        console.log('boo');
    }
)();    //boo

//passagem de argumento
(
    function(name){
        console.log('Hello '+ name +'!');
    }
)('js');    //Hello js!

//uma forma
var result = (function(){ return 'func_imed'; })();
console.log(result);        //func_imed
console.log(typeof result);     //string

//melhor forma
var result2 = function(){ return 'best'; }();
console.log(result2);       //best
console.log(typeof result2);    //string

//Inner (private) functions
function outer(param){
    function inner(theinput){
        return theinput * 2;
    }
    return 'The result is '+ inner(param);
}
console.log(outer(8));  //The result is 16

//using expression
var outer = function(param){
    var inner = function(input){
        return input * 3;
    };
    return 'The result is '+ inner(param);
};
console.log(outer(10)); //The result is 30
//inner() não é visível fora de outer(), então é uma private function

//functions that return functions
//pg 98