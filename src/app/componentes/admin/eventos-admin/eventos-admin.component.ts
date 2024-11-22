import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../../service/eventos.service';
import { Evento } from '../../../interface/evento';

@Component({
  selector: 'app-eventos-admin',
  standalone: true,
  imports: [],
  templateUrl: './eventos-admin.component.html',
  styleUrl: './eventos-admin.component.scss'
})
export class EventosAdminComponent implements OnInit {
  evento = { 
    titulo: '', 
    descripcion: '', 
    fecha: '', 
    time: '', 
    location: '', 
    entrada: '', 
    precio: undefined as number | undefined
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
    if (this.evento.titulo && this.evento.descripcion && this.evento.fecha && this.evento.time && this.evento.location && this.evento.entrada) {
      const eventoAEnviar: Evento = {
        ...this.evento,
        ...(this.evento.entrada !== 'gratuita' && this.evento.precio !== undefined && { precio: this.evento.precio })
      };

      this.eventosService.crearEvento(eventoAEnviar).subscribe(() => {
        this.obtenerEventos();
        this.evento = { titulo: '', descripcion: '', fecha: '', time: '', location: '', entrada: '', precio: undefined };
      });
    }
  }

  editarEvento(evento: Evento) {
    this.evento = { ...evento };
  }

  eliminarEvento(evento: Evento) {
    this.eventosService.eliminarEvento(evento.id).subscribe(() => {
      this.obtenerEventos();
    });
  }
}
