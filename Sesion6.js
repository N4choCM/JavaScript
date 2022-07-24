// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["aceite", "pan", "leche", "tomates", "patatas"];
console.log(listaCompra);

// Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("aceite de girasol");
console.log(listaCompra);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();
console.log(listaCompra);

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const favFilms = [
{
    title: "Pirates of the Caribbean",
    director: "This man",
    date: 2004},
{
    title: "La La Land",
    director: "Johny Deep",
    date: 2016},
{
    title: "Mickey Mouse",
    director: "Walt Disney",
    date: 1984
}];

console.log(favFilms);

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const modernFilms = favFilms.filter(film => film.date > 2010);
console.log(modernFilms);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
var directors = favFilms.map(function(director){
    return `${director.director}`
});
console.log(directors);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
var titles = favFilms.map(function(title) {
    return `${title.title}`
});
console.log(titles);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
var directorsTitles = directors.concat("-->", titles);
console.log(directorsTitles)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
var directorsTitles2 = [...directors, ...titles];
console.log(directorsTitles2);