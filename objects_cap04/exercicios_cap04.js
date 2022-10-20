//pg 183
//Exercícios
// 1)
function F(){
    function C(){
        return this;
    }
    return C();
}

var o = new F();
console.log(typeof o);  //object
console.log(o); //retorna um objeto

console.log('-----------------------------------------');
function C(){
    this.a = 1;
    return false;
}
console.log(typeof new C());    //object

var s = new MyString('oi');
