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

//se fornecer dias a mais será incrementada a data
console.log(new Date(2022,11,32));      //irá para 01-janeiro-2023
//2023-01-01T03:00:00.000Z

//date pode ser inicializado com timestamp
var dateHoje = new Date();
var timestampHoje = dateHoje.getTime();
console.log(timestampHoje); //1666273943925
console.log(new Date(timestampHoje));   //nesse cazo é redundante, mas pra exemplo serve
//2022-10-20T13:53:15.756Z

//retorna a data com hora correta
console.log(Date());    //Thu Oct 20 2022 10:56:22 GMT-0300 (Brasilia Standard Time)
var dtCorreta = Date();
//retorna corretamente o horário
console.log(dtCorreta); //Thu Oct 20 2022 10:57:10 GMT-0300 (Brasilia Standard Time)
//nesse caso tem que fazer o parse
console.log(typeof dtCorreta)   //string
//já fica alterado o horário
//new Date sempre incrementa 3h
console.log(new Date(dtCorreta));   //2022-10-20T13:58:29.000Z
console.log(typeof new Date()); //object

//methods to work with date objects
//yyyy, mm, dd
var d1 = new Date(2022,10,20);
console.log(d1.toString()); //Sun Nov 20 2022 00:00:00 GMT-0300 (Brasilia Standard Time)
//mudando o mês: janeiro = 0, dezembro = 11
d1.setMonth(11);
console.log(typeof d1); //object
console.log(d1.valueOf());  //1671505200000
console.log(d1);    //2022-12-20T03:00:00.000Z
console.log(d1.getMonth()); //11
d1.setMonth(9);
console.log(d1.getMonth()); //9

console.log(Date.parse('Jan 11, 2022'));    //1641870000000
console.log(Date.parse('Jan 01, 2022'));    //1641006000000
console.log(Date.parse('Dec 31, 2022'));    //1672455600000
var difTime = Date.parse('Dec 31, 2022') - Date.parse('Jan 01, 2022');
console.log(difTime);   //31449600000   31_449_600_000 (1 ano)
console.log(Date.parse(Date()) - 1515657600000);    //150617361000
console.log(150617361000 / 31449600000);    //4.789166189713065 (4 anos)

console.log(Date.UTC(2022,11,31));  //1672444800000
console.log(new Date(Date.UTC(2022,11, 31)));   //2022-12-31T00:00:00.000Z

//obter timestamp
console.log( Date.now() );          //1666275569654
console.log(new Date().getTime());  //1666275569654
console.log(Date.now() === new Date().getTime());   //true
console.log(new Date().valueOf());  //1666275697063
var n1 = Date.now();
console.log(typeof n1); //number

//Dates são convertidos para inteiros com o operador '+'
var n2 = +new Date();
console.log(n2, typeof n2); //1666275697063 number

//calculando datas de aniversário
var n3 = new Date(1979, 4, 7);
//0 = domingo, 1 = segunda-feira
console.log(n3.getDay());       //1
console.log(n3.toDateString()); //Mon May 07 1979

//saber quantas vezes os dias de aniversário aparecem por dias da semana
var stats = [0, 0, 0, 0, 0, 0, 0];  //quanto em cada dia da semana
//seria interessante saber, quais anos e em que idade
var idade = 0;
for (var i = 1979; i <= 2022; i++){
    let dia = new Date(i, 4, 7).getDay();
    stats[dia]++;
    idade++;

    //mesmo que: stats[0]++
    //mesmo que: stats[0] += 1;
    //mesmo que: stats[0] = stats[0] + 1;

}
console.log(stats);
/*
[dom, seg, ter, qua, qui, sex, sab]
[5, 7, 6, 6, 7, 6, 7]
*/
console.log(idade); //44