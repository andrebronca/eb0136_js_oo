//pg 168
//Date
//data atual
//import {getBrTimezone} from 'br-timezone'
//console.log(getBrTimezone('SP'));
console.log(new Date());    //2022-10-19T19:05:24.857Z (hora: 16:05)

//formatos para especificar data
console.log( new Date('2022 10 18'));
console.log( new Date('1 1 2022')); //2022-01-01T03:00:00.000Z
console.log( new Date('1 mar 2022 5:30'));  //2022-03-01T08:30:00.000Z

/*
Month: 0 janeiro, 11 dezembro
Day: 1 to 31
Hour: 0 to 23
Minute, seconds: 0 to 59
Miliseconds: 0 to 999
*/
console.log( new Date(2022,0,1,17,05,03,120));  //2022-01-01T20:05:03.120Z

//obs.: está sempre somando + 3h na hora de exibir pelo node

console.log(new Date().toLocaleTimeString('pt-BR'));    //16:25:41 (hora correta)

console.log(new Date(2022, 0, 1, 17));  //2022-01-01T20:00:00.000Z

console.log(new Date(2022, 11, 28));    //2022-12-28T03:00:00.000Z
