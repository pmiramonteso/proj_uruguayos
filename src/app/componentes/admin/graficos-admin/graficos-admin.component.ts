import { Component, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { Grafico } from '../../../interface/grafico';
import { GraficosService } from '../../../service/graficos.service';
import { ChartOptions, ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-graficos-admin',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './graficos-admin.component.html',
  styleUrl: './graficos-admin.component.scss'
})
export class GraficosAdminComponent implements OnInit {
  emigrantesData: Grafico[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: string[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: '', backgroundColor: '', hoverBackgroundColor: '' }
    ]
  };

  constructor(private servicioGraficos: GraficosService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.servicioGraficos.getDatos().subscribe(data => {
      this.emigrantesData = data;

      // Llenar las etiquetas y los datos para el gráfico
      this.barChartLabels = this.emigrantesData.map(d => d.año.toString());
      this.barChartData = {
        labels: this.barChartLabels,
        datasets: [
          {
            data: this.emigrantesData.map(d => d.emigrantes_hombres || 0),
            label: 'Emigrantes Hombres',
            backgroundColor: '#42A5F5',
            hoverBackgroundColor: '#1E88E5',
          },
          {
            data: this.emigrantesData.map(d => d.emigrantes_mujeres || 0),
            label: 'Emigrantes Mujeres',
            backgroundColor: '#66BB6A',
            hoverBackgroundColor: '#43A047',
          },
        ],
      };
    });
  }
}

