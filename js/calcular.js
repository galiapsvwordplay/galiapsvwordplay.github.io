const palabras = ["casa", "perro", "gato", "burro"];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];

const palConGiones=palabra.replace(/./g, "_ ");
alert(palabra + " - " + palConGiones)

document.querySelector('#calcular').addEventListener('click',() =>{
alert(1)
});