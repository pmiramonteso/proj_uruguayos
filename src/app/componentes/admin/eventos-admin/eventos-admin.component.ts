import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../../service/eventos.service';
import { Evento } from '../../../interface/evento';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventos-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eventos-admin.component.html',
  styleUrl: './eventos-admin.component.scss'
})
export class EventosAdminComponent implements OnInit {
  evento: Partial<Evento> = {
    titulo: '',
    descripcion: '',
    fecha: '',
    fecha_fin: '',
    hora_inicio: '',
    hora_fin: '',
    color: '',
    entrada: '',
    precio: undefined,
    ubicacion: '',
  };

  eventos: Evento[] = [];

  constructor(private eventosService: EventosService) {}
  ngOnInit(): void {
    this.obtenerEventos();
  }

  obtenerEventos() {
    this.eventosService.getEventos().subscribe((data) => {
      this.eventos = data;
    });
  }
  setColor(color: string) {
    this.evento.color = color;
  }
  onSubmit() {
    if (this.evento.fecha) {
      this.evento.fecha = new Date(this.evento.fecha).toISOString().split('T')[0]; // Formato YYYY-MM-DD
    } else {
      delete this.evento.fecha;
    }

    if (this.evento.fecha_fin) {
      this.evento.fecha_fin = new Date(this.evento.fecha_fin).toISOString().split('T')[0]; // Formato YYYY-MM-DD
    } else {
      delete this.evento.fecha_fin;
    }

    if (this.evento.hora_inicio) {
      this.evento.hora_inicio = new Date(`1970-01-01T${this.evento.hora_inicio}`).toISOString().split('T')[1].slice(0, 5); // Formato HH:mm
    } else {
      delete this.evento.hora_inicio;
    }

    if (this.evento.hora_fin) {
      this.evento.hora_fin = new Date(`1970-01-01T${this.evento.hora_fin}`).toISOString().split('T')[1].slice(0, 5); // Formato HH:mm
    } else {
      delete this.evento.hora_fin;
    }

    if (this.evento.id) {
      this.eventosService.actualizarEvento(this.evento as Evento).subscribe(() => {
        this.obtenerEventos();
        this.resetearFormulario();
      });
    } else {
      const nuevoEvento: Partial<Evento> = { ...this.evento };
      this.eventosService.crearEvento(nuevoEvento as Evento).subscribe(() => {
        this.obtenerEventos();
        this.resetearFormulario();
      });
    }
  }

  editarEvento(evento: Evento) {
    this.evento = { 
      ...evento, 
      precio: evento.precio ?? undefined 
    };
  }
  
  eliminarEvento(evento: Evento) {
    if (evento.id) {
      this.eventosService.eliminarEvento(evento.id).subscribe(() => {
        this.obtenerEventos();
      });
    } else {
      console.error("No se puede eliminar un evento sin ID");
    }
  }

  cancelarEdicion() {
    this.resetearFormulario();
  }

  private resetearFormulario() {
    this.evento = {  
      titulo: '', 
      descripcion: '', 
      fecha: '',
      fecha_fin: '',
      hora_inicio: '',
      hora_fin: '',
      color: '',
      entrada: '', 
      precio: undefined,
      ubicacion: ''};
  }
}
