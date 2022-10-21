//pg 198
//Collection
//Set : não permite valores duplicados, valores podem ser de qualquer tipo
//set são mais rápidos do que arrays

//criando um set
const s = new Set();
s.add('first');
console.log(s.has('first'));    //true
console.log(s.delete('first')); //delete retorna true se existir o valor
console.log(s.has('first'));    //false

const colors = new Set(['red', 'white', 'blue']);
/* se adicionar um valor que já existe, nada acontece.
se remover um valor que não existe, nada acontece.
não há um modo de capturar esse cenário.
obs.: (fora do livro), usar o has pra ver se tem,
se for false, pode adicionar, se for true pode remover
*/
console.log(colors.size);   //3
for(const v of colors){
    console.log(v);
}
// red
// white
// blue

const ar_colors = [...colors];
console.log(typeof ar_colors, ar_colors); //object [ 'red', 'white', 'blue' ]
