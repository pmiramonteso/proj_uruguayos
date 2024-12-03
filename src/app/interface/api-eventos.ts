import { Evento } from "./evento";

export interface ApiEventos {
    code: number;
    message: string;
    data: Evento[];
}
