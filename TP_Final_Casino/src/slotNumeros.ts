import { Tragamonedas } from "./tragamoneda";

export class SlotNumeros extends Tragamonedas {
  private numeros: number[];

  public constructor(apuesta: number, minBet: number, reels: number) {
    super(apuesta, minBet, reels);
    this.numeros = [1, 2, 3, 4];
  }

  public girarReels(): string {
    let result: number[] = [];
    for (let i = 0; i < this.reels; i++) {
      const randomIndex = Math.floor(Math.random() * this.numeros.length);
      result.push(this.numeros[randomIndex]);
    }
    console.log(result);

    const sorteoString = result.join('');
    let premio: number;
    let mensaje: string;

    switch (sorteoString) {
      case '1111':
        premio = this.apuesta * 150;
        mensaje = `Has ganado $ ${premio}.`;
        break;

      case '2222':
        premio = this.apuesta * 100;
        mensaje = `Has ganado $ ${premio}.`;
        break;

      case '3333':
        premio = this.apuesta * 75;
        mensaje = `Has ganado $ ${premio}.`;
        break;

      case '4444':
        premio = this.apuesta * 50;
        mensaje = `Has ganado $ ${premio}.`;
        break;

      case '1234':
        premio = this.apuesta * 25;
        mensaje = `Has ganado $ ${premio}.`;
        break;

      case '4321':
        premio = this.apuesta * 15;
        mensaje = `Has ganado $ ${premio}.`;
        break;

      case '3412':
        premio = this.apuesta * 5;
        mensaje = `Has ganado $ ${premio}.`;
        break;

      default:
        mensaje = `Lo siento, has perdido tu apuesta...!!!.`;
        break;
    }

    return mensaje;
  }


  public mostrarReglas(): string {
    const reglasSlot: string = `
                                    **//** BiEnVeNiDoS a SlOt NuMeRoS **\\**

                                       ** REGLAS TRAGAMONEDAS **
        ------------------------------------------------------------------------------------------
        1- El tragamonedas Números  tiene 4 reels con las opciones  “1”, “2”, “3”, “4”.
        2- El jugador realizar su apuesta.
        3- El jugador presiona "jugar" para hacer girar los reel.
        4- Cuando los reel se detienen, los símbolos que aparecen en la línea de pago determinan si el jugador ha ganado o no.
        5- Si el jugador obtiene una combinación ganadora, “Gana”
        6- Si el jugador no obtiene una combinación ganadora, pierde su apuesta.

        Minimo de Apuesta = $ 200

        LINEAS GANADORAS:
                "1111" = x150
                "2222" = x100
                "3333" = x75
                "4444" = x50
                "1234" = x25
                "4321" = x15
                "3412" = x5

        ------------------------------------------------------------------------------------------
        ------------------------------------------------------------------------------------------`;
    return reglasSlot;
  }

  public validarApuesta(apuesta: number): string {
    if (apuesta >= this.minBet) {
      console.log(`Usted apuesta: $ ${apuesta}`);
      return this.girarReels();
    } else {
      return `Debe ingresar una apuesta igual o mayor a $${this.minBet}`;
    };
  }

  public sacarProbabilidad(): void {
    this.probabilidad = 7 / 256 * 100;
    console.log(`La probabilidad de ganar este juego es del ${this.probabilidad} %`);

  }
}






