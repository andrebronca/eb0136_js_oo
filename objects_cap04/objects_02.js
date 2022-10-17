//pg 121
var hero = {
    breed: 'Turtle',
    occupation: 'Ninja',
    say: function(){
        return 'I\'m '+ hero.occupation;
    },
    diz: (s => "I'm "+ s)
};
console.log(hero.say());
console.log(hero.diz('ninja faixa preta'));
console.log(hero['diz']('faixa branca'));
var method = 'say';
console.log(hero[method]());

//blank object
var hero2 = {};
console.log(hero2.breed);   //undefined
hero2.breed = 'turtle';
hero2.name = 'Leonardo';
hero2.sayName = function(){
    return hero2.name;
};

console.log(hero2.sayName());   //Leonardo
//deleting
delete hero2.name;
console.log(hero2.sayName());   //undefined

var hero3 = {
    breed: 'Turtle',
    occupation: 'Ninja',
    name: 'Rafaelo',
    say: function(){
        return 'I\'m '+ this.name;
    },
    diz: (s => "I'm "+ this.name)
};

console.log(hero3.name);
console.log(hero3.say());
console.log(hero3.diz('Leonardo'));