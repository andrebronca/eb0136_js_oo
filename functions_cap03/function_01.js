//página 74
function sum(a, b){
    var c = a + b;
    return c;
}

var result = sum(7,3);
console.log(result);
console.log(sum(2));    // NaN ( 2 + undefined )
console.log(sum(1,3,4,2,3));    // 4, parametros extras sao ignorados

function args(){
    return arguments;   //retorna o que for passado de argumentos
}
console.log(args());
console.log(args(1,2,'tres',false));

function sumOnSteroids(){
    var i, res = 0, number_of_params = arguments.length;
    for(i = 0; i < number_of_params; i++){
        res += arguments[i];
    }
    return res;
}

console.log(sumOnSteroids(1,1,1));  //3
console.log(sumOnSteroids(1,2,3,4));    //10
console.log(sumOnSteroids(1,2,3,4,4,3,2,1));    //20
console.log(sumOnSteroids(5));  //5
console.log(sumOnSteroids());   //0

//default parameters
function render(fog_level = 0, spark_level = 100){
    console.log(`Fog Level: ${fog_level} and spark_level: ${spark_level}`);
}

render(10);
render(undefined, 10);