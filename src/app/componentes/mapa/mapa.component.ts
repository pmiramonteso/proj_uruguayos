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

  ngOnInit(): void {
    this.checkRole();
    this.iniciarMapa();
    this.cargarNegocios();
  }
  
  checkRole(): void {
    const token = localStorage.getItem('token'); // Suponiendo que guardas el token en localStorage.
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.isAdmin = payload.role === 'admin';
    }
  }
  ngAfterViewInit(): void {
    this.iniciarMapa();
  }

  iniciarMapa(): void {
    this.map = L.map('map').setView([40.4637, -3.7492],7)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  }

  cargarNegocios(): void {
      this.negociosService.getNegocios().subscribe((data) => {
      this.negocios = data;
      this.añadirMarkers();
    });
  }

  añadirMarkers(): void {
    this.negocios.forEach((negocio) => {
      L.marker([+negocio.latitud, +negocio.longitud]).addTo(this.map).bindPopup(`
        <b>${negocio.nombre}</b><br>
        ${negocio.descripcion}<br>
        ${negocio.direccion ? `Dirección: ${negocio.direccion}<br>` : ''}
        ${negocio.redesSociales ? `<a href="${negocio.redesSociales}" target="_blank">Redes Sociales</a>` : ''}
      `);
    })
  }

  editNegocio(negocio: any): void {
    // Lógica para editar negocio.
  }
  deleteNegocio(id_negocio: string): void {
    const id = Number(id_negocio);
    this.negociosService.deleteNegocio(id_negocio).subscribe(() => {
      this.cargarNegocios();
    });
  }
}
  
   

