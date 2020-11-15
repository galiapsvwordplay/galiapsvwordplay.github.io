import { valida } from "../lib/util.js";
export class CtrlSaludo {
  /** @param {string} nombre */
  calculaSaludo(nombre) {
    const nombreSinEspacios = nombre ? nombre.trim() : "";
    valida(nombreSinEspacios, "Falta proporcionar el nombre.");
    return `Hola ${nombreSinEspacios}.`;
  }
}
