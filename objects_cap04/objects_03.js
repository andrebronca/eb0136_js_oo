//pg 124
//constructor functions
function Hero(){
    this.occupation = 'Ninja';
}

//usar new operator
var hero = new Hero();
console.log(hero.occupation);

function Hero2(name){
    this.name = name;
    this.occupation = 'Ninja';
    this.whoAreYou = function(){
        return "I'm "+ this.name +
            " and I'm a "+ this.occupation;
    };
}

var h1 = new Hero2('Michelangelo');
var h2 = new Hero2('Donatello');
console.log(h1.whoAreYou());
console.log(h2.whoAreYou());

console.log(typeof h2);     //object
var h3 = Hero2('Leonardo');
console.log(typeof h3);     //undefined
