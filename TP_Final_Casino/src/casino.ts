import { Dados } from "./dado";
import { Ruleta } from "./ruleta";
import { SlotLetras } from "./slotLetras";
import { SlotNumeros } from "./slotNumeros";

export class Casino {
    private nombre: string;
    private dados: Dados;
    private ruleta: Ruleta;
    private slotLetras: SlotLetras;
    private slotNumeros: SlotNumeros;

    public constructor(nombre: string, dados: Dados, ruleta: Ruleta, slotLetras: SlotLetras, slotNumeros: SlotNumeros) {
        this.nombre = nombre;
        this.dados = dados;
        this.ruleta = ruleta;
        this.slotLetras = slotLetras;
        this.slotNumeros = slotNumeros;
    }

    public mostrarSaludoInicial(nombre: string): string {
        this.nombre = nombre;
        const saludo: string = `Bienvenidos a ${nombre}, donde te robamos toda la plata...`;
        return saludo;
    }

    public getNombre(): string {
        return this.nombre;
    }
}
