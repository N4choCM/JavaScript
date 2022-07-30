var name = "Nacho";
var lastNames = "Campos Martí";
const me = {
    "name": name,
    "lastNames": lastNames
};

sessionStorage.setItem("person", JSON.stringify(me));
localStorage.setItem("person", JSON.stringify(me));
document.cookie = "ChocolateCookie=NachoCookie1; expires=" + new Date(2023, 4, 8).toUTCString(); 

console.log(JSON.parse(sessionStorage.getItem("person")));
console.log(JSON.parse(localStorage.getItem("person")));
console.log(document.cookie);
