//pg 136
//ES6 object methods
//copy properties using Object.assign
let a = {};
Object.assign(a, {age: 25});
console.log(a);     //{ age: 25 }

let b = {age: 23, gender: 'male'};
Object.assign(b, {age: 25});
console.log(b);     //{ age: 25, gender: 'male' }

/* o objeto original tem : c e d como propriedades
original c: 1, será substituido por: c:2
origianl d: 2, será substituido por: d:5
original receberá a propriedade: e:3
*/
console.log(Object.assign({c:1, d:2}, {c:2}, {d:5}, {e:3}));

//criando um não-numerável propriedade
Object.defineProperty(b, 'superpowers',{enumerable:false, value:'ES6'})
//quando enumerable for false, o assign ignora essa propriedade na cópia
console.log(b);     //{ age: 25, gender: 'male' }
console.log(b.superpowers);     //ES6
//nem aparece na exibição do objeto
Object.defineProperty(b, 'title',{writable: true,enumerable:true,value:'JavaScript ES6'});
console.log(b);
//coisas que o livro não explica
//tem que adicionar: writable:true e enumerable:true para adicionar e ser visível

//Compara values with Object.is
//resultado inconsistente com === para os dois exemplos:
console.log(NaN === NaN);   //false
console.log(-0 === +0);     //true
//melhor utilizar
console.log(Object.is(NaN,NaN));    //true
console.log(Object.is(-0,+0));      //false
//fora os dois casos acima, o === pode ser utilizado

//destructuring
//caso típico
var config = {
    server: 'localhost',
    port: '8080',
};
//adicionei uma sequencia para não conflitar com o exemplo abaixo
var server1 = config.server;
var port1 = config.port;

//formato ES6 (mesmo que config, só mudei o nome e em vez de var, é let
let config2 = {
    server: 'localhost',
    port: '8080',
    timeout: 900,
};
//variáveis locais possuem os mesmo nomes de propriedades do objeto
let {server,port} = config2;
console.log(server, port);      //localhost 8080

//mudando o nome, recebe a propriedade timeout e atribui para 't'
let {timeout: t} = config2;
console.log(t);     //900

//atribuindo valores para variáveis já declaradas, usar ()
let config3 = {
    server3: 'localhost',
    port3: '8080',
    timeout3: 900,
};
let server3 = '127.0.0.1';
let port3 = '80';
let timeout3 = '100';
({server3, port3} = config3);
console.log(server3, port3);    //localhost 8080

function startServer(configValue){
    console.log(configValue);
}

startServer({server3, port3, timeout3} = config3);

//especificando valor padrão caso a propriedade não existe no objeto
//previne que seja atribuido: undefined para 'user'
let {user='adm'} = config3;
console.log(user);      //adm

//destructuring in array
const arr = ['a','b'];
const [x,y] = arr;
console.log(x,y);   //a b

//pulando a ordem de desestruturação
const days = ['Thursay','Friday','Saturday','Sunday'];
const [,,sat,sun] = days;
console.log(sat, sun);  //Saturday Sunday

var a1 = 1, b1 = 2;
//invertendo sem o uso de temp variable
[b1,a1] = [a1,b1];
console.log(a1, b1);    //2 1

//usando (...) rest operator para atribuir o restante dos elementos
const [x1, ...y1] = ['a','b','c'];
console.log(x1, y1);    //a [ 'b', 'c' ]
