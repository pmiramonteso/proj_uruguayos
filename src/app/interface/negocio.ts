export interface Negocio {
    id_negocio: number;
    nombre: string;
    descripcion: string;
    direccion?: string;
    redesSociales?: string;
    latitud: number;
    longitud: number;
    categoria: string;
  }