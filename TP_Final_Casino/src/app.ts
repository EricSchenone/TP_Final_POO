import { Casino } from "./casino";
import { Dados } from "./dado";
import { Ruleta } from "./ruleta";
import { SlotLetras } from "./slotLetras";
import { SlotNumeros } from "./slotNumeros";
import readlineSync from "readline-sync";

const slotNumeros: SlotNumeros = new SlotNumeros(0, 200, 4);
const slotLetras: SlotLetras = new SlotLetras(0, 75, 3);
const ruleta: Ruleta = new Ruleta(0, 100);
const dados: Dados = new Dados(0, 150);
const casinoLasFlores: Casino = new Casino("Gaming House Casino", dados, ruleta, slotLetras, slotNumeros);

console.log(casinoLasFlores.mostrarSaludoInicial(casinoLasFlores.getNombre()));

const nombreUsuario = readlineSync.question('Ingrese su nombre:  ');
const edadUsuario = readlineSync.question('Ingrese su edad :    ');

if (edadUsuario >= "18") {
  console.log(` Hola ${nombreUsuario}, vamos a jugarrrr !!! `);

  let volver: boolean = true;
  while (volver) {
    const juegos: string[] = ["Dados", "Ruleta", "SlotLetras", "SlotNumeros"];
    const index = readlineSync.keyInSelect(juegos, 'Elige el que deseas jugar:');
    if (index === -1) {
      console.log("Gracias por visitar nuestro casino...!!!");
      volver = false;
      break;
    }

    switch (juegos[index]) {
      case "Dados": {
        console.log(dados.mostrarReglas());
        dados.probabilidadDeGanar();
        const valor = readlineSync.questionFloat("Ingrese su apuesta:");
        dados.apostar(valor);
        const resultado = dados.validarApuesta(valor);
        console.log(`
        *****************
        ${resultado}
        *****************`);
        const continuar = readlineSync.keyInYN([`Desea seguir jugando?`]);
        if (!continuar) {
          console.log(`Gracias por apostar en ${casinoLasFlores.getNombre()}...!!!`)
          volver = false;
        }
        break;
      }

      case "Ruleta": {
        console.log(ruleta.mostrarReglas());
        ruleta.sacarProbabilidad();
        const valor = readlineSync.questionFloat("Ingrese su apuesta:");
        const numeroApuesta = readlineSync.questionFloat("Ingrese el numero al que quiere apostar:");
        if (numeroApuesta > 36) {
          console.log("Debe seleccionar un numero entre 0 y 36");
          const numeroApuesta = readlineSync.questionFloat("Ingrese el numero al que quiere apostar:");
        }
        ruleta.apostar(valor);
        const resultado = ruleta.validarApuesta(valor);
        console.log(`
        ****************
              ${resultado}
        ****************`);
        if (numeroApuesta == resultado) {
          console.log(`**¡¡ Ha ganado ${(valor * 2)}.`);
        } else {
          console.log(`**¡¡ Ha perdido su apuesta..!!**`);
        }

        const continuar = readlineSync.keyInYN([`Desea seguir jugando?`]);
        if (!continuar) {
          console.log(`Gracias por apostar en ${casinoLasFlores.getNombre()}...!!!`)
          volver = false;
        }
        break;
      }

      case "SlotLetras": {
        console.log(slotLetras.mostrarReglas());
        slotLetras.sacarProbabilidad();
        const valor = readlineSync.questionFloat("Ingrese su apuesta:");
        slotLetras.apostar(valor);
        const resultado = slotLetras.validarApuesta(valor);
        console.log(` 
        *******************
            ${resultado}
        *******************`);
        const continuar = readlineSync.keyInYN([`Desea seguir jugando?`]);
        if (!continuar) {
          console.log(`Gracias por apostar en ${casinoLasFlores.getNombre()}...!!!`)
          volver = false;
        }
        break;
      }

      case "SlotNumeros": {
        console.log(slotNumeros.mostrarReglas());
        slotNumeros.sacarProbabilidad();
        const valor = readlineSync.questionFloat("Ingrese su apuesta:");
        slotNumeros.apostar(valor);
        const resultado = slotNumeros.validarApuesta(valor);
        console.log(` 
        *******************
        ${resultado}
        *******************`);
        const continuar = readlineSync.keyInYN([`Desea seguir jugando?`]);
        if (!continuar) {
          console.log(`Gracias por apostar en ${casinoLasFlores.getNombre()}...!!!`);
          volver = false;
        }
        break;
      }
    }
  }

} else {
  console.log(`Debe ser mayor de 18 para ingresar a los juegos. Gracias por visitar Casino Pindorchi`);
}







