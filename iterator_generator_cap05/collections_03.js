//pg 195
//Collections
//map : é iterável, a ordem importa, a key pode ser de qualquer tipo
const m = new Map();    //creates an empty map
m.set('first',1);
console.log(m.get('first'));    //1

console.log(m.has('first'));    //true
m.delete('first');
console.log(m.has('first'));    //false
m.set('foo',1);
m.set('bar',0);
console.log(m.size);    //2
m.clear();  //limpa as entradas em map
console.log(m.size);    //0

//create a Map
const m2 = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

//compact syntax
const m3 = new Map().set(1,'one').set(2,'two').set(3,'tree');

//armazenar objeto como key
const obj = {};
const m4 = new Map([
    [1, 'one'],
    ['two','two'],
    [obj, 'three'],
]);
console.log(m4.has(obj));   //true

//iterating over maps
for (const k of m2.keys()){
    console.log(k);     //iterable from key
}
//1 2 3

for (const v of m2.values()){
    console.log(v);     //iterator from value
}
// one two, three

//entry return in form of a [key, value]
for (const [k,v] of m2.entries()){
    console.log('['+ k +'] = '+ v);
}
// [1] = one
// [2] = two
// [3] = three

//forma mais sucinta de acessar entries
for (const [k,v] of m2){
    console.log(k +'='+ v);
}
// 1=one
// 2=two
// 3=three

//Converting maps to arrays usando (...)
const keys = [...m2.keys()];
const values = [...m2.values()];
const k_v = [...m2];
console.log(keys);      //[ 1, 2, 3 ]
console.log(values);    //[ 'one', 'two', 'three' ]
console.log(k_v);   //[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
console.log(typeof m2);     //object
console.log(typeof keys);   //object
console.log(typeof values); //object
console.log(typeof k_v);    //object
