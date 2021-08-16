const semaforo = document.querySelector('#semaforo');
const tempText = document.querySelector('#tempText');
let color = "#239B56";

let temperatura = 1999;

tempText.textContent = temperatura + "ºC";
semaforo.style.backgroundColor = color;

tempText.textContent = temperatura + "ºC";

setInterval(function () {
    const URL_PARRILLA =  'http://192.168.1.31:5000/parrilla';
    
    $.get(URL_PARRILLA, function (data) {
        console.log(date);
    });

}, 5000);
