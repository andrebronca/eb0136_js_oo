// 1)
function getRGB(value){
    let rgb = 'rgb(';
    if(value.length == 7 && value[0] == '#'){
        let r, g, b;
        r = value[1] + value[2];
        g = value[3] + value[4];
        b = value[5] + value[6];
        rgb += parseInt(r,16) +','+ parseInt(g,16) +','+ parseInt(b,16) +')';
        return rgb
    } else {
        return 'invalid format hexadecimal color: #rrggbb';
    }
}

var a = getRGB('#00ff00');
var b = getRGB('#0f0');
console.log(a);
console.log(b);

// 2)
console.log(parseInt(1e1));
console.log(parseInt('1e1'));
console.log(parseFloat('1e1'));
console.log(isFinite(0/10));
console.log(isFinite(20/0));
console.log(isNaN(parseInt(NaN)));
/*
10
1
10
true
false
true
*/

// 3)
var a = 1;
function f(){
    function n(){
        console.log(a);
    }
    var a = 2;
    n();
}

f();

// 4) eval converte tudo para: console.log('Boo!')
var f = console.log;
eval('f("Boo!")');

var e;
var f = console.log;
eval('e=f')('Boo!');

(function(){
    return console.log;
})()('Boo!');