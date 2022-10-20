//pg187
//for...of loop
const iter = ['a', 'b'];
for(const i of iter){
    console.log(i);
}
// a
// b

for(let c of 'String'){
    console.log(c);
}
// S
// t
// r
// i
// n
// g

//Take an array and return an iterator
function iterar(array){
    var nextId = 0;
    return {
        next: function(){
            if(nextId < array.length){
                return {
                    value: array[nextId++],
                    done: false
                }; //return
            } else {
                return {
                    done: true
                }; //return
            } //else
        } //next
    } //return
} //function

var it = iterar(['Hello', 'Iterators']);
console.log( it.next().value );     //Hello
console.log( it.next().value );     //Iterators
console.log( it.next().done );      //true

/* An iterable object
1. Has a method with key has 'Symbol.iterator'
2. This method returns an iterator via method 'next'
*/
let iteravel = {
    0: 'Hello',
    1: 'World of ',
    2: 'Iterators',
    length: 3,
    [Symbol.iterator](){
        let index = 0;
        return {
            next: () => {
                let value = this[index];
                let done = index >= this.length;
                index++;
                return {
                    value, done
                }; //return
            }, //() =>
        };//return
    }, //symbol
};

for (let i of iteravel){
    console.log(i);
}
// Hello
// World of
// Iterators
