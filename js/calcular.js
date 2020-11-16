String.prototype.replace=function(index, character) { return this.substr(0, index) + 
    character + this.substr(index+character.length); } 
//Uso: palConGuiones = palConGuiones.replaceAt(i*2, letra);

const palabras = ["casa", "perro", "gato", "burro"];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];

let palConGiones=palabra.replace(/./g, "_ ");

document.querySelector('#output').innerHTML =palConGiones;
document.querySelector("#calcular").addEventListener("click" , () =>
{
    const letra = document.querySelector('#letra').value;
    
    for (const i in palabra){
        if(letra == palabra[i]){
            palConGiones = palConGiones.replace(i * 2 , letra);
        }
    }
    document.querySelector('#output').innerHTML =palConGiones;

});
