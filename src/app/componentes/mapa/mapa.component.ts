import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { NegociosService } from '../../service/negocios.service';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.scss'
})
export class MapaComponent implements OnInit, AfterViewInit {
  map: any;
  negocios: any[] = []; 
  constructor(private negociosService: NegociosService) {}

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.map = L.map('map').setView([40.4637, -3.7492],6)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    const customIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });

    L.marker([40.4637, -3.7492], { icon: customIcon }).addTo(this.map)
      .bindPopup('¡Hola, este es un marcador!')
      .openPopup();

      this.map.whenReady(() => {
        this.map.invalidateSize();
      })
        
  }
}
