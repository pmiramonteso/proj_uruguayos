import { Grafico } from "./grafico";

export interface ApiGrafico {
    code: number;
    message: string;
    data: Grafico[];
}
