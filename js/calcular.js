// @ts-nocheck
const palabras = ["casa", "perro", "gato", "burro"];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];

const palConGiones=palabra.replace(/./g, "_ ");

document.querySelector("#calcular").addEventListener('click',() =>
{
    const letra = document.querySelector("#letra").value;
    alert(letra)
});