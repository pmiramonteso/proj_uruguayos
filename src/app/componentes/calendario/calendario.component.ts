import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export class CalendarioComponent implements OnInit{
  mes: { nombre: string; numero: number } = { nombre: '', numero: 0 };

  meses = [
    { nombre: 'Enero', numero: 1 },
    { nombre: 'Febrero', numero: 2 },
    { nombre: 'Marzo', numero: 3 },
    { nombre: 'Abril', numero: 4 },
    { nombre: 'Mayo', numero: 5 },
    { nombre: 'Junio', numero: 6 },
    { nombre: 'Julio', numero: 7 },
    { nombre: 'Agosto', numero: 8 },
    { nombre: 'Septiembre', numero: 9 },
    { nombre: 'Octubre', numero: 10 },
    { nombre: 'Noviembre', numero: 11 },
    { nombre: 'Diciembre', numero: 12 }
  ];
  
  ngOnInit(): void {}

  getSemanasDelMes(mes: number): number[][] {
    const diasPorMes: { [key: number]: number } = {
      1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
    };

    // Obtén el primer día del mes
    const primerDia = new Date(2024, mes - 1, 1).getDay(); // Día de la semana (0 = Domingo, 6 = Sábado)
    const totalDias = diasPorMes[mes];

    // Construye las semanas
    const semanas: number[][] = [];
    let semana: number[] = Array(primerDia).fill(0); // Rellenar los espacios previos al primer día

    for (let dia = 1; dia <= totalDias; dia++) {
      semana.push(dia);
      if (semana.length === 7) {
        semanas.push(semana);
        semana = [];
      }
    }

    // Agregar días restantes
    if (semana.length > 0) {
      while (semana.length < 7) {
        semana.push(0); // Espacios vacíos después del último día
      }
      semanas.push(semana);
    }

    return semanas;
  }
}
