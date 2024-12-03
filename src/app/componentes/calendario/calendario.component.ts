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
};

  constructor(private eventosService: EventosService) {
  
    this.obtenerEventos();
  }

  obtenerEventos() {
    this.eventosService.getEventos().subscribe((data) => {
      console.log(data);
      this.eventos = data;
    });
  }
}
