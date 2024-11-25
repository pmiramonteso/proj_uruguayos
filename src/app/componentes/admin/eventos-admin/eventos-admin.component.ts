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
    hora: '',
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

  onSubmit() {
    if (this.evento.id) {
      // Actualizar evento
      this.eventosService.actualizarEvento(this.evento as Evento).subscribe(() => {
        this.obtenerEventos();
        this.resetearFormulario();
      });
    } else {
      // Crear evento
      const nuevoEvento: Partial<Evento> = { ...this.evento };
      this.eventosService.crearEvento(nuevoEvento as  Evento).subscribe(() => {
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
      hora: '',
      entrada: '', 
      precio: undefined,
      ubicacion: ''};
  }
}
