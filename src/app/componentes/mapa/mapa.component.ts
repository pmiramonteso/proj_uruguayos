import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Negocio } from '../../interface/negocio';
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
  negocios: Negocio[] = [];
  isAdmin: boolean = false;

  constructor(private negociosService: NegociosService) {}

  checkRole(): void {
    const token = localStorage.getItem('token'); // Suponiendo que guardas el token en localStorage.
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.isAdmin = payload.role === 'admin';
    }
  }
  ngOnInit(): void {
    this.cargarNegocios();
  }

  ngAfterViewInit(): void {
    this.iniciarMapa();
  }

  iniciarMapa(): void {
    this.map = L.map('map').setView([40.4637, -3.7492], 7)

    if (this.map) {
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    } else {
      console.error('Error al inicializar el mapa');
    }
  }

  cargarNegocios(): void {
      this.negociosService.getNegocios().subscribe((negocios: Negocio[]) => {
        console.log('Respuesta de la API:', negocios);
          this.negocios = negocios;
          this.añadirMarkers();
          }, (error) => {
        console.error('Error al cargar los negocios:', error);
      });
  }

  añadirMarkers(): void {
    const iconMenu = L.icon({
      iconUrl: 'assets/iconos/menu.png',
      iconSize: [30, 30], 
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });

    this.negocios.forEach((negocio) => {

      if (negocio.latitud && negocio.longitud) {
        const lat = +negocio.latitud;
        const lng = +negocio.longitud;

      if (!isNaN(lat) && !isNaN(lng)) {
        const icon = negocio.categoria === 'restaurante' ? iconMenu : undefined;
        const popupContent = `
          <b>${negocio.nombre}</b><br>
          ${negocio.descripcion}<br>
          ${negocio.direccion ? `Dirección: ${negocio.direccion}<br>` : ''}
          ${negocio.tipoRedSocial ? `
            <a href="${negocio.urlRedSocial}" target="_blank">Visita nuestras Redes Sociales</a>` : ''}
        `;
        
        L.marker([lat, lng], { icon })
          .addTo(this.map)
          .bindPopup(popupContent);
    } else {
        console.error('Coordenadas inválidas para el negocio:', negocio);
      }
    } else {
      console.error('Faltan coordenadas para el negocio:', negocio);
    }
  });
  }
}