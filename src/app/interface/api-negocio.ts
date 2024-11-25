import { Negocio } from "./negocio";

export interface ApiNegocio {
    code: number;
    message: string;
    data: Negocio[];
}
