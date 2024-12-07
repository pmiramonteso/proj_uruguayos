import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Evento } from '../../interface/evento';
import { EventosService } from '../../service/eventos.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})

export class CalendarioComponent {
  eventos: any[] = [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    events: this.eventos
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
        backgroundColor: evento.color,
      }));
      this.calendarOptions.events = this.eventos;
    });
  }
}
