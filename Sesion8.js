// Una función sin parámetros que devuelva siempre "true".
function AlwaysTrue(){
    return true;
}
console.log(AlwaysTrue());

// Una función asíncrona que utilice un setTimeout y 
// pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hola, soy una promesa.");
    }, 5000);
});
console.log(myPromise);

// Una función generadora de índices pares automáticos
function* paresAutomaticos(){
    var id = 0;
    while(true){
        yield id += 2;
        if(id == 10){
            return;
        }
    }
}

var autoId = paresAutomaticos();

console.log(autoId.next().value);
console.log(autoId.next().value);
console.log(autoId.next().value);
console.log(autoId.next().value);
console.log(autoId.next().value);