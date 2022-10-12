//pg 66
var i = 0;
var s1 = [];
while (i < 10){
    s1[i] = i;
    s1[i] += i;
    i++;
}
console.log(s1);

i = 0;
do {
//    console.log('i: '+ i +', s1[i]: '+ s1[i]);
    s1[i] = i;
//    console.log('i: '+ i +', s1[i]: '+ s1[i]);
    s1[i] = i * i;
//    console.log('i: '+ i +', s1[i]: '+ s1[i] +', i * i: '+ (i * i));
    i++;
//    console.log('i++: '+ i +', s1[i]: '+ s1[i]);
//    console.log('----------------------');
} while(i < 10);
console.log(s1);

var punishment = '';
for(var i = 0; i < 10; i++){
    punishment += 'I will never do this again.\n';
}
console.log(punishment);

for(var i = 0, punicao = ''; i < 10; i++){
    punicao += 'Eu nunca mais vou fazer isso.\n';
}
console.log(punicao);

//for estranho
for(
    var i = 0, punicao = '';
    i < 5;
    i++, punicao += 'Acho que vou fazer novamente.\n'
){}
console.log(punicao);

//partes são opcionais
var j = 0, msg = '';
for(;;){
    msg += 'Repetindo no for.\n';
    if (++j == 10){
        break;
    }
}
console.log(msg);

var res = '\n';
for(var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
        res += '* ';
    }
    res += '\n';
}
console.log(res);

//desenhando um 'floco de neve'
var res = '\n', i, j;
for(i = 1; i <= 7; i++){
    for(j = 1; j <= 15; j++){
        res += (i * j) % 8 ? '-' : '*';
    }
    res += '\n';
}
console.log(res);

//for...in (só usado para interagir em objetos, arrays
//arrays pode ser usado o for tradicional
//é semelhante ao foreach do Java
var a = ['a','b','c','x','y','z'];
var result = '\n';

for(var i in a){
    result += 'index: '+ i +', value: '+ a[i] +'\n';
}
console.log(result);