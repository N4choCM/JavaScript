//Factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
var num = 10;
var num2 = 10;
for(var i = 1; i <= num2; i++){
    num *= i;
}
console.log(num);

//Factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
var num3 = 10;
var num4 = 10
var j = 1;
while(j<=num4){
    num3 *= j;
    j++;
}
console.log(num3);

/*Factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, 
una bifurcación if y una sentencia break*/
var num5 = 10;
var num6 = 10;
var k = 1;
while(k<=num6){
    num5 *= k;
    k++;
    if(k == 1){
        break;
    }
}
console.log(num5);