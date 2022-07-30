var lista = [];
function fibonacci(num){
    var num1 = 1;
    var num2 = 0;
    var resultado = 0;

    for(i=1; i <= num; i++){
        resultado = num1 + num2;
        num2 = num1;
        num1 = resultado;
        lista.push(resultado);
        }
}

fibonacci(6);
console.log(lista);