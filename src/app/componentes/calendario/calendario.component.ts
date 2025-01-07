import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventosService } from '../../service/eventos.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import { FooterComponent } from '../footer/footer.component';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule, FullCalendarModule, FooterComponent, ],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})

export class CalendarioComponent {
  eventos: any[] = [];
  eventoSeleccionado: any = null;
  defaultImageUrl: string = 'assets/img/default-blog.jpg';

  calendarOptions: CalendarOptions = {
    locale: esLocale, 
    buttonText: {
      today: 'Hoy'
    },
    initialView: 'dayGridMonth',
    titleFormat: { year: 'numeric', month: 'long' },
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
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
  private mapearColor(color: string): string {
    const colores: { [key: string]: string } = {
      pastelYellow: '#ffca28',
      pastelIndigo: '#ab47bc',
      pastelBlue: '#26c6da',
      pastelGreen: '#26a69a',
      pastelOrange: '#ff7043',
      pastelRed: '#ef5350',
      pastelVioleta: '#7d54c4',
    };
    return colores[color] || '#a0c1e1';
  }

  obtenerEventos() {
    this.eventosService.getEventos().subscribe((data) => {
      this.eventos = data.map(evento => {
        const colorValido = this.mapearColor(evento.color || '#0000FF');

        const eventoFormateado = {
        titulo: evento.titulo,
        fecha: evento.fecha,
        fecha_fin: evento.fecha_fin,
        descripcion: evento.descripcion,
        hora_inicio: evento.hora_inicio,
        hora_fin: evento.hora_fin,
        color: evento.color,
        entrada: evento.entrada,
        precio: evento.precio,
        ubicacion: evento.ubicacion,
        photo: evento.photo ? `http://localhost:3000/assets/img/${evento.photo}` : this.defaultImageUrl,

        // Formato de FullCalendar
        title: evento.titulo,
        start: evento.fecha,
        end: evento.fecha_fin,
        backgroundColor: colorValido,
      };
      console.log('Color del evento:', eventoFormateado.backgroundColor);

      return eventoFormateado;
    });
      
    
      this.calendarOptions.events = this.eventos.map(evento => ({
        title: evento.title,
        start: evento.start,
        end: evento.end,
        backgroundColor: evento.backgroundColor,
      }));
      
    });
  }
  
  mostrarModal(info: any) {
    const evento = this.eventos.find(e => e.title === info.event.title);
    this.eventoSeleccionado = evento;
  }
  seleccionarEvento(evento: any) {
    this.eventoSeleccionado = evento;
  }
  cerrarModal() {
    this.eventoSeleccionado = null;
  }
}
