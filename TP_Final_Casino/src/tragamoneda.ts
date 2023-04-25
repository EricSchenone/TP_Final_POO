import { Apuesta } from "./apuesta";

export class Tragamonedas extends Apuesta{
    protected reels : number;
   
    constructor(apuesta : number, minBet : number, reels : number){
        super(apuesta, minBet)
        this.reels = reels;
    }
}

