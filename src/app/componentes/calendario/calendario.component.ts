import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})

export class CalendarioComponent {
  mes = { nombre: '', numero: 0 }; // Nombre y número del mes actual
  hoy = { dia: new Date().getDate(), mes: new Date().getMonth() + 1, anio: new Date().getFullYear() };
  semanasDelMes: (number | null)[][] = []; // Arreglo para las semanas del mes

  nombresMeses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  constructor() {
    this.mes.numero = this.hoy.mes;
    this.mes.nombre = this.nombresMeses[this.mes.numero - 1];
    this.generarCalendario(this.hoy.anio, this.mes.numero);
  }

  generarCalendario(anio: number, mes: number) {
    const primerDia = new Date(anio, mes - 1, 1); // Primer día del mes
    const ultimoDia = new Date(anio, mes, 0); // Último día del mes

    const diasEnMes = ultimoDia.getDate(); // Total de días en el mes
    const primerDiaSemana = primerDia.getDay(); // Día de la semana del primer día (0 = domingo, 1 = lunes, ...)
    
    // Ajustar para que empiece en lunes (opcional, depende de tu diseño)
    const inicio = primerDiaSemana === 0 ? 6 : primerDiaSemana - 1; 

    const semanas: (number | null)[][] = [];
    let semana: (number | null)[] = Array(inicio).fill(null); // Rellenar días vacíos al principio

    for (let dia = 1; dia <= diasEnMes; dia++) {
      if (semana.length === 7) {
        semanas.push(semana);
        semana = [];
      }
      semana.push(dia);
    }

    // Rellenar días vacíos al final de la última semana
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
}
