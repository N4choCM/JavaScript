const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    alert("Click en el botón");
});

$(document).ready(function () {
    $("#btn").click(() => {
        console.log("Hola, estoy utilizando JQuery.")
    })
  });