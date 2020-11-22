import { valida } from "../lib/util.js";
export class CtrlSaludo {
  /** @param {string} nombre */
  calculaSaludo(nombre) {
    const nombreSinEspacios = nombre ? nombre.trim() : "";
    valida(nombreSinEspacios, "Falta proporcionar el nombre.");
    return `Hola ${nombreSinEspacios}. `;
  }
}

function cargarImagen() 
 { 

 const imagen = new Image();  
 imagen.src = https://media.giphy.com/media/8vc2rMUDjhy6Y/giphy.gif; 
 return imagen; 
 }

