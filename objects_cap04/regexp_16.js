//pg 178
//split()
var csv = 'one, two,three ,four'; //observar espaços
console.log(csv.split(','));    //[ 'one', ' two', 'three ', 'four' ]
console.log(csv.split(/\s*,\s*/)); //zero ou mais espaços antes e depois da vírgula
//[ 'one', 'two', 'three', 'four' ]

//passing a string when a RegExp is expected
//equivalentes
console.log('test'.replace('t','r'));   //rest
console.log('test'.replace(new RegExp('t'),'r'));   //rest

//o problema de passar string é que o modificador global fica false por
//padrão
console.log('pool'.replace('o','*'));   //p*ol  (global g = false)
console.log('pool'.replace(/o/g, '*')); //p**l  (global g = true)

