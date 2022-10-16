//página 74

//funçãom com dois parâmetros
function sum(a, b){
    var c = a + b;
    return c;
}

var result = sum(7,3);
console.log(result);
//passando apenas um argumento
console.log(sum(2));    // NaN ( 2 + undefined )
console.log(sum(1,3,4,2,3));    // 4, parametros extras sao ignorados

function args(){
    return arguments;   //retorna o que for passado de argumentos
}
console.log(args());
console.log(args(1,2,'tres',false));

//recebe uma quantidade indefinida de argumentos e realiza a soma
function sumOnSteroids(){
    var i, res = 0, number_of_params = arguments.length;
    for(i = 0; i < number_of_params; i++){
        res += arguments[i];
    }
    return res;
}

console.log(sumOnSteroids(1,1,1));  //3
console.log(sumOnSteroids(1,2,3,4));    //10
console.log(sumOnSteroids(1,2,3,4,4,3,2,1));    //20
console.log(sumOnSteroids(5));  //5
console.log(sumOnSteroids());   //0

//default parameters
function render(fog_level = 0, spark_level = 100){
    console.log(`Fog Level: ${fog_level} and spark_level: ${spark_level}`);
}

render(10);
render(undefined, 10);

//referenciando outro parâmetro com valor padrão
function t(fog_level=1, spark_level=fog_level){
    console.log(`Fog Level: ${fog_level} and spark_level: ${spark_level}`);
}
t(10);

function s(fog_level=10, spark_level = fog_level * 10){
    console.log(`Fog Level: ${fog_level} and spark_level: ${spark_level}`);
}
s(10);

//escopo de variável
var scope = "outer_scope";
function scoper(val=scope){
    var scope="inner_scope";
    console.log(val);
}
scoper();       //outer_scope
scoper(scope);  //outer_scope

//rest parameters (...), é do tipo array e deve ficar por último e ser único
//(...) são do tipo array verdadeiro
function sayThings(tone, ...quotes){
    console.log(Array.isArray(quotes));
    console.log(`In ${tone} voice, I say ${quotes}`);
}
sayThings("Morgam Freeman", "Something serius", " Imploding Universe"," Amen");

//spread operators: recebe um array e converte em variáveis
function sumAll(a,b,c){
    return a + b + c;
}
var numbers = [6,7,8];
//ES5 way of passing array as an argument of a function
console.log(sumAll.apply(null,numbers));    //21

//ES6 spread operator
console.log(sumAll(...numbers));    //21
var numbers2 = [6,7,8,1];
console.log(sumAll(...numbers2));   //21

var midweek = ['Wed','Thu'];
var weekend = ['Sat','Sun'];
var week = ['Mon','Tue', ...midweek, 'Fri', ...weekend];
console.log(week);