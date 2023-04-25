export interface iApuesta {
     apostar(apuesta: number): void;
     mostrarReglas(): string;
     validarApuesta(apuesta: number): number | string;
}