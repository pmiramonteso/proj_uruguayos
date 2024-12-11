import { Component, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { Grafico } from '../../../interface/grafico';
import { GraficosService } from '../../../service/graficos.service';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-graficos-admin',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './graficos-admin.component.html',
  styleUrls: ['./graficos-admin.component.scss']
})
export class GraficosAdminComponent implements OnInit {
  grafico1Data: Grafico[] = [];
  grafico2Data: Grafico[] = [];
  grafico3Data: Grafico[] = [];

  public barChartLabels1: string[] = [];
  public barChartLabels2: string[] = [];
  public barChartLabels3: string[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData1: ChartDataset<'bar'>[] = [
    { data: [], label: 'Emigrantes en España', backgroundColor: '#42A5F5', hoverBackgroundColor: '#1E88E5' },
    { data: [], label: 'Nacionalidad Extranjera', backgroundColor: '#66BB6A', hoverBackgroundColor: '#43A047' },
    { data: [], label: 'Nacionalidad Española', backgroundColor: '#FF7043', hoverBackgroundColor: '#FF3D00' }
  ];

  public barChartData2: ChartDataset<'bar'>[] = [
    { data: [], label: 'Emigrantes en España', backgroundColor: '#42A5F5', hoverBackgroundColor: '#1E88E5' },
    { data: [], label: 'Emigrantes por Provincia', backgroundColor: '#66BB6A', hoverBackgroundColor: '#43A047' }
  ];

  public barChartData3: ChartDataset<'bar'>[] = [
    { data: [], label: 'Emigrantes en el Mundo', backgroundColor: '#42A5F5', hoverBackgroundColor: '#1E88E5' },
    { data: [], label: 'Emigrantes por País', backgroundColor: '#FF7043', hoverBackgroundColor: '#FF3D00' }
  ];

  constructor(private servicioGraficos: GraficosService) { }

  ngOnInit(): void {
    this.cargarGrafico1();
    this.cargarGrafico2();
    this.cargarGrafico3();
  }

  cargarGrafico1(): void {
    this.servicioGraficos.getGrafico1().subscribe(data => {
      this.grafico1Data = data;
      this.barChartLabels1 = this.grafico1Data.map(d => String(d.año));

    this.barChartData1[0].data = this.grafico1Data.map(d => d.total_emigrantes_españa || 0);
    this.barChartData1[1].data = this.grafico1Data.map(d => d.nacionalidad_extranjera || 0);
    this.barChartData1[2].data = this.grafico1Data.map(d => d.nacionalidad_española || 0);
  });
  }

  cargarGrafico2(): void {
    this.servicioGraficos.getGrafico2().subscribe(data => {
      this.grafico2Data = data;
      this.barChartLabels2 = this.grafico2Data.map(d => d.provincia_destino || '');
      this.barChartData2[0].data = this.grafico2Data.map(d => d.total_emigrantes_españa || 0);
      this.barChartData2[1].data = this.grafico2Data.map(d => d.total_emigrantes_provincia || 0);
    });
  }

  cargarGrafico3(): void {
    this.servicioGraficos.getGrafico3().subscribe(data => {
      this.grafico3Data = data;
      this.barChartLabels3 = this.grafico3Data.map(d => d.pais_destino || '');
      this.barChartData3[0].data = this.grafico3Data.map(d => d.total_emigrantes_mundo || 0);
      this.barChartData3[1].data = this.grafico3Data.map(d => d.total_emigrantes_pais || 0);
    });
  }
}