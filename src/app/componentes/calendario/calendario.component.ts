import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Evento } from '../../interface/evento';
import { EventosService } from '../../service/eventos.service';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})

export class CalendarioComponent {
  mes = { nombre: '', numero: 0 };
  hoy = { dia: new Date().getDate(), mes: new Date().getMonth() + 1, anio: new Date().getFullYear() };
  semanasDelMes: (number | null)[][] = [];
  eventos: Evento[] = [];
  nombresMeses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  constructor(private eventosService: EventosService) {
    this.mes.numero = this.hoy.mes;
    this.mes.nombre = this.nombresMeses[this.mes.numero - 1];
    this.generarCalendario(this.hoy.anio, this.mes.numero);
    this.obtenerEventos();
  }

  generarCalendario(anio: number, mes: number) {
    const primerDia = new Date(anio, mes - 1, 1);
    const ultimoDia = new Date(anio, mes, 0);
    const diasEnMes = ultimoDia.getDate();
    const primerDiaSemana = primerDia.getDay();
    const inicio = primerDiaSemana === 0 ? 6 : primerDiaSemana - 1; 

    const semanas: (number | null)[][] = [];
    let semana: (number | null)[] = Array(inicio).fill(null);

    for (let dia = 1; dia <= diasEnMes; dia++) {
      if (semana.length === 7) {
        semanas.push(semana);
        semana = [];
      }
      semana.push(dia);
    }

    while (semana.length < 7) {
      semana.push(null);
    }
    semanas.push(semana);

    this.semanasDelMes = semanas;
  }

  cambiarMes(direccion: number) {
    this.mes.numero += direccion;

    if (this.mes.numero > 12) {
      this.mes.numero = 1;
      this.hoy.anio++;
    } else if (this.mes.numero < 1) {
      this.mes.numero = 12;
      this.hoy.anio--;
    }

    this.mes.nombre = this.nombresMeses[this.mes.numero - 1];
    this.generarCalendario(this.hoy.anio, this.mes.numero);
  }
  obtenerEventos() {
    this.eventosService.getEventos().subscribe((data) => {
      console.log(data);
      this.eventos = data;
    });
  }
}
