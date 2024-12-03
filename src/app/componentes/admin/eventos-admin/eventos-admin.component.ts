import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../../service/eventos.service';
import { Evento } from '../../../interface/evento';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventos-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './eventos-admin.component.html',
  styleUrl: './eventos-admin.component.scss'
})
export class EventosAdminComponent implements OnInit {
  eventoForm!: FormGroup;
  eventos: Evento[] = [];
  mostrarFormularioEvento: boolean = false;
  eventoEditando: any = null;
  editando = false;
  agregando = false;
  evento: Partial<Evento> = {};

  constructor(private fb: FormBuilder, private eventosService: EventosService) {}
  ngOnInit(): void {
    this.eventoForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      hora_inicio: ['', Validators.required],
      hora_fin: ['', Validators.required],
      color: ['', Validators.required],
      entrada: ['', Validators.required],
      precio: null,
      ubicacion: ['', Validators.required]
    });
    this.obtenerEventos();
  }

  obtenerEventos() {
    this.eventosService.getEventos().subscribe((eventos) => {
      console.log('Eventos obtenidos:', eventos);
      this.eventos = eventos;
    }, error => {
      console.error('Error al obtener eventos', error);
    });
  }
  limpiarFormulario(): void {
    this.eventoForm.reset();
    this.eventoEditando = null;
    this.mostrarFormularioEvento = false;
  }

  setColor(color: string) {
    this.evento.color = color;
  }
  agregarEvento() {
    this.mostrarFormularioEvento = !this.mostrarFormularioEvento;
    this.editando = false;
    this.agregando = true;

    if (this.evento.fecha) {
      this.evento.fecha = new Date(this.evento.fecha).toISOString().split('T')[0];
    } else {
      delete this.evento.fecha;
    }

    if (this.evento.fecha_fin) {
      this.evento.fecha_fin = new Date(this.evento.fecha_fin).toISOString().split('T')[0];
    } else {
      delete this.evento.fecha_fin;
    }

    if (this.evento.hora_inicio) {
      this.evento.hora_inicio = new Date(`1970-01-01T${this.evento.hora_inicio}`).toISOString().split('T')[1].slice(0, 5);
    } else {
      delete this.evento.hora_inicio;
    }

    if (this.evento.hora_fin) {
      this.evento.hora_fin = new Date(`1970-01-01T${this.evento.hora_fin}`).toISOString().split('T')[1].slice(0, 5);
    } else {
      delete this.evento.hora_fin;
    }

    if (this.eventoForm.valid) {
      const formValue = this.eventoForm.value;
      console.log('Formulario enviado:', formValue);
      
      if (this.eventoEditando) {
        const eventoActualizado = { ...formValue, id_evento: this.eventoEditando.id_evento };
        console.log('Evento actualizado:', eventoActualizado);
        this.eventosService.actualizarEvento(eventoActualizado).subscribe({
          next: (response) => {
            console.log('Evento actualizado:', response);
            this.obtenerEventos();
            this.limpiarFormulario();
          },
          error: (error) => {
            console.error('Error al actualizar evento:', error);
          }
        });
      } else {
        this.eventosService.crearEvento(formValue).subscribe({
          next: (response) => {
            console.log('Evento creado:', response);
            this.obtenerEventos();
            this.limpiarFormulario();
          },
          error: (error) => {
            console.error('Error al crear evento:', error);
          }
        });
      }
    }
  }

  editarEvento(evento: Evento): void {
    if (!evento) {
      console.error("El evento no tiene datos válidos.");
      return;
    }
  
    this.editando = true;
    this.agregando = false;
  
    this.eventoEditando = evento;
    this.eventoForm.patchValue({
      titulo: evento.titulo || '',
      descripcion: evento.descripcion || '',
      fecha: evento.fecha ? new Date(evento.fecha).toISOString().split('T')[0] : '',
      fecha_fin: evento.fecha_fin ? new Date(evento.fecha_fin).toISOString().split('T')[0] : '',
      hora_inicio: evento.hora_inicio ? evento.hora_inicio.slice(0, 5) : '',
      hora_fin: evento.hora_fin ? evento.hora_fin.slice(0, 5) : '',
      color: evento.color || 'defaultColor',
      entrada: evento.entrada || 'Gratuito',
      precio: evento.precio ?? null,
      ubicacion: evento.ubicacion || '',
    });
  
    this.mostrarFormularioEvento = true;
  }
  
  eliminarEvento(evento: Evento) {
    if (evento.id_evento) {
      this.eventosService.eliminarEvento(evento.id_evento).subscribe(() => {
        this.obtenerEventos();
      });
    } else {
      console.error("No se puede eliminar un evento sin ID");
    }
  }
}
