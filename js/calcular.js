String.prototype.replaceAt=function(index, character) 
{ 
    return this.substr(0, index) + character + this.substr(index+character.length); 
} 

//Uso: palConGuiones = palConGuiones.replaceAt(i*2, letra);

const palabras = ["casa", "perro", "gato", "burro"];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];

let palConGiones=palabra.replace(/./g, "_ ");
let contFallos = 0;
document.querySelector('#output').innerHTML = palConGiones;
document.querySelector('#calcular').addEventListener('click' , () =>
{
    const letra = document.querySelector('#letra').value;
    let fallo = true;
    for (const i in palabra){   
        if(letra == palabra[i]){
            palConGiones = palConGiones.replaceAt(i*2, letra);
            fallo=false;
        }
    }

    if(fallo){
        contFallos ++;
        document.querySelector('#ahorcado').style.backgroundPosition = -(307 * contFallos) + 'px 0';
        if(contFallos == 4){
            alert("Game Over")
        }
    }else{
        if(palConGiones.indexOf('_')<0){
            alert("Ganaste")
        }
    }

    document.querySelector('#output').innerHTML =palConGiones;
    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus();

});
