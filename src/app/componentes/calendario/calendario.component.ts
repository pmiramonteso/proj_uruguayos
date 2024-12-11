import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Evento } from '../../interface/evento';
import { EventosService } from '../../service/eventos.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule, FullCalendarModule, FooterComponent],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})

export class CalendarioComponent {
  eventos: any[] = [];
  eventoSeleccionado: any = null;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    events: this.eventos,
    eventClick: this.mostrarModal.bind(this),
};

  constructor(private eventosService: EventosService) {
    this.obtenerEventos();
    this.eventosService.getEventosActualizados().subscribe(() => {
      this.obtenerEventos();
    });
  }

  obtenerEventos() {
    this.eventosService.getEventos().subscribe((data) => {
      this.eventos = data.map(evento => ({
        title: evento.titulo,
        start: evento.fecha,
        end: evento.fecha_fin,
        descripcion: evento.descripcion,
        hora_inicio: evento.hora_inicio,
        hora_fin: evento.hora_fin,
        backgroundColor: evento.color,
        entrada: evento.entrada,
        precio: evento.precio,
        ubicacion: evento.ubicacion,
        
      }));
      this.calendarOptions.events = this.eventos;
    });
  }
  
  mostrarModal(info: any) {
    const evento = this.eventos.find(e => e.title === info.event.title);
    this.eventoSeleccionado = evento;
  }

  cerrarModal() {
    this.eventoSeleccionado = null;
  }
}
