//pg 179
//Error objects
//console.log(iDontExist());  //ReferenceError: iDontExist is not defined

try {
    console.log(iDontExist());
} catch(e){
    console.error('Aconteceu um erro ['+ e.name +' : '+ e.message +']');
} finally {
    console.log('Finally');
}

function maybeExists(){
    return 0;
}
try {
     var total = maybeExists();
     if (total === 0){
         throw new Error('Division by zero!');
     } else {
         console.log( 50 / total );
     }
} catch (e){
 console.log(e.name +' : '+ e.message );
} finally {
 console.log('Finally!');
}

try {
    var total = maybeExists();
    if (total === 0){
        throw {
            name: 'MeuErro',
            message: 'OMG! Something terrible has happened',
            file: 'error_17.js',    //não implementado pelo livro
            line: 'iniciou: 30'  //não implementado pelo livro
        }
    } else {
        console.log( 50 / total );
    }
} catch (e){
    console.log(e.name +' : '+ e.message  +', [arquivo: '+ e.file +' linha: '+ e.line +']');
} finally {
    console.log('Finally!');
}