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
  constructor(private negociosService: NegociosService) {}

  ngOnInit(): void {
    this.negociosService.getNegocios().subscribe(
      (data: Negocio[]) => {
        this.negocios = data;
        this.añadirNegocioMapa();
      },
      (error) => {
        console.error('Error al obtener los negocios:', error);
      }
    );
  }
  
  ngAfterViewInit(): void {
    this.iniciarMapa();
  }

  iniciarMapa(): void {
    this.map = L.map('map').setView([40.4637, -3.7492],7)

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

  añadirNegocioMapa(): void {
        if (!this.map) {
          console.error('Mapa no inicializado');
          return;
        }
    
        const customIcon = L.icon({
          iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
        });
    
        const markers: L.Marker[] = [];

        this.negocios.forEach((negocio) => {
          if (negocio.latitud && negocio.longitud) { // Validamos latitud y longitud
            const marker = L.marker([+negocio.latitud, +negocio.longitud], { icon: customIcon }) // Convertimos a número
              .bindPopup(`
                <b>${negocio.nombre}</b><br>
                ${negocio.descripcion}<br>
                ${negocio.direccion ? `Dirección: ${negocio.direccion}<br>` : ''}
                ${negocio.redesSociales ? `<a href="${negocio.redesSociales}" target="_blank">Redes Sociales</a>` : ''}
              `);
            marker.addTo(this.map);
            markers.push(marker);
          } else {
            console.warn(`Negocio con datos incompletos: ${JSON.stringify(negocio)}`);
          }
        });
    
        if (markers.length > 0) {
          const group = L.featureGroup(markers);
          this.map.fitBounds(group.getBounds().pad(0.5)); // Ajusta la vista del mapa para incluir todos los marcadores.
        } else {
          console.warn('No se agregaron marcadores porque no hay datos válidos.');
        }
        console.log('Negocios recibidos:', this.negocios);
      }
  }

