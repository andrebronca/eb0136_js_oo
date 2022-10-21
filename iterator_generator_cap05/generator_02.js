//pg 191
//Generators
// posições do '*' válidas
// function *f(){}  (vou adotar essa)
// function* f(){}
function *generatorFunc(){
    console.log('1');   //-----> A
    yield;              //-----> B  (faz com que a função pare)
    console.log('2');   //-----> C
}

const generatorObj = generatorFunc();
console.log(generatorObj.next());   //-----> A
// 1
// { value: undefined, done: false }
console.log(generatorObj.next());   //-----> C
// 2
// { value: undefined, done: true }

function *logger(){
    console.log('start');
    console.log(yield);
    console.log(yield);
    console.log(yield);
    return 'end';
}

var genObj = logger();
console.log( genObj.next() );
// start
// { value: undefined, done: false }
console.log( genObj.next('Save'));
// Save
// { value: undefined, done: false }
console.log( genObj.next('Our'));
// Our
// { value: undefined, done: false }
console.log( genObj.next('Souls'));
// Souls
// { value: 'end', done: true }

function *logger2(){
    yield 'a';
    yield 'b';
}
var genObj2 = logger2();
console.log(typeof genObj2[Symbol.iterator] === 'function');    //true
console.log(typeof genObj2.next === 'function');    //true
console.log(genObj2[Symbol.iterator]() === genObj2);    //true

//Iterating over generators
for (const i of logger2()){
    console.log(i);
}
// a
// b

//converter iterable in array
const arr = [...logger2()];
console.log(arr);   //[ 'a', 'b' ]

//destructuring syntax
const [x, y] = logger2();
console.log(x, y);  // a b