import { Apuesta } from "./apuesta";


export class Ruleta extends Apuesta {


    public constructor(apuesta: number, minBet : number) {
        super(apuesta, minBet)
    }

    public girarRuleta(): number {
        const resultado = Math.floor(Math.random() * 37);
        return resultado;
    }

    public mostrarReglas(): string {
        const reglasRuleta: string = `
                                  **//** BiEnVeNiDoS a RuLeTa **//**

                                      ** REGLAS DE LA RULETA **
        ------------------------------------------------------------------------------------------                              
        1- La mesa de la ruleta tiene una rueda con 37 números en donde el jugador debe apostar
        2- El jugador debe apostar a un número y luego apretar “jugar”.
        3- Cuando se detiene  la ruleta sale el número ganador.
        4- Si la bola cae en el numero cero (o doble cero, en algunas variantes), todas las apuestas pierden, a menos que el jugador haya apostado específicamente por el cero.
        
        APUESTA MINIMA = $ 100
        El numero ganador duplicara la apuesta incial.
        
        ------------------------------------------------------------------------------------------
        ------------------------------------------------------------------------------------------`;
        return reglasRuleta;

    }

    public validarApuesta(apuesta: number): number | string {
        if (apuesta >= this.minBet) {
            console.log(`Usted apuesta: $${apuesta}`);
            return this.girarRuleta();
        } else {
            return `Debe ingresar una apuesta mayor a $${this.minBet}`;
        }
    }

    public sacarProbabilidad(): string {
        const probabilidad = 1/36 * 100;
        return `La probabilidad de ganar este juego es del ${probabilidad} %`;
    }

}




