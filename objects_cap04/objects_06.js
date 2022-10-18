//pg 133
//ES6 object literals
let a = 1;
let b = 2;
let val = {a: a, b: b};
console.log(val);       //{ a: 1, b: 2 }

//se a key and value possuem o mesmo nome, pode ser feito
let val2 = {a, b};
console.log(val2);  //{ a: 1, b: 2 }

var obj = {
    prop: 1,
    modifier: function(){
        console.log(this.prop);
    }
};
obj.modifier();     //1
obj['modifier']();  //1

//método compacto para definir o obj acima
var obj2 = {
    prop: 2,
    modifier (){
        console.error(this.prop);
    }
};

obj2.modifier();    //2
obj2.prop = 3;
obj2.modifier();    //3

//computando propriedades chaves de objetos
//permite mais flexibilização na criação de propriedades e métodos
let vehicle = 'car';
function vehicleType(){
    return 'truck';
}
let car = {
    [vehicle +'_model']: 'ford'
};
let truck = {
    [vehicleType()+'_model']: 'mercedez'
};
console.log(car);       //{ car_model: 'ford' }
console.log(truck);     //{ truck_model: 'mercedez' }

let obj_type = 'Vehicle';
let obj3 = {
    ['get'+obj_type](){
        return 'ford';
    }
};

//object properties and attributes
console.log(Object.getOwnPropertyDescriptor(obj2,'prop'));
//{ value: 3, writable: true, enumerable: true, configurable: true }

Object.defineProperty(obj2,'prop', {configurable: false});
console.log(Object.getOwnPropertyDescriptor(obj2,'prop'));
//{ value: 3, writable: true, enumerable: true, configurable: false }
Object.defineProperty(obj2,'prop', {writable: false});
obj2.prop = 4;
console.log(obj2.modifier());
console.log(Object.getOwnPropertyDescriptor(obj2,'prop'));
//{ value: 3, writable: false, enumerable: true, configurable: false }
