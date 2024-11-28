export interface Evento {
    id?: number;
    titulo: string;
    descripcion: string;
    fecha: string;
    fecha_fin?: string,
    hora_inicio: string,
    hora_fin?: string,
    color?: string,
    entrada: string;
    precio?: number;
    ubicacion: string;
    createdAt?: string;
    updatedAt?: string;
  }
