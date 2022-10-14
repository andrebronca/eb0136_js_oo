//pg 64
var a = '1', result = '';
switch (a){ //deve retornar um valor
    case 1:
        result = 'Number 1';
        break;
    case '1':
        result = 'String 1';    //true
        break;
    default:
        result = 'I don\'t know';
        break;
}
console.log(result);