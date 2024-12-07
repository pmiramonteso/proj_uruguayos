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
  mostrarModal: boolean = false;
  negocioSeleccionado: Negocio | null = null;
  negociosFiltrados: Negocio[] = [];
  categorias: string[] = ['restaurante', 'tienda', 'servicio', 'panaderia'];
  categoriaSeleccionada: string | null = null;
  categoriasSeleccionadas: string[] = [];

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

abrirModal(negocio: Negocio): void {
  this.negocioSeleccionado = negocio;
  this.mostrarModal = true;
}

cerrarModal(): void {
  this.mostrarModal = false;
  this.negocioSeleccionado = null;
}

  iniciarMapa(): void {
    this.map = L.map('map').setView([40.4637, -3.7492], 7)

    if (this.map) {
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

      this.map.on('moveend', () => {
        this.actualizarNegociosCercanos();
      });
    } else {
      console.error('Error al inicializar el mapa');
    }
  }

  cargarNegocios(): void {
      this.negociosService.getNegocios().subscribe((negocios: Negocio[]) => {
        console.log('Respuesta de la API:', negocios);
          this.negocios = negocios;
          this.añadirMarkers();
          this.actualizarFiltrados();
          }, (error) => {
        console.error('Error al cargar los negocios:', error);
      });
  }

  actualizarFiltrados(): void {
    this.negociosFiltrados = this.negocios.filter(
      (negocio) => !this.categoriaSeleccionada || negocio.categoria === this.categoriaSeleccionada
    );
  }

  toggleCategoriaSeleccionada(categoria: string, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
  
    if (checked) {
      this.categoriasSeleccionadas.push(categoria);
    } else {
      this.categoriasSeleccionadas = this.categoriasSeleccionadas.filter(
        (c) => c !== categoria
      );
    }
    this.filtrarPorCategorias();
  }
  
  añadirMarkers(negocios: Negocio[] = this.negocios): void {
    const iconRestaurante = L.icon ({
      iconUrl: '/assets/iconos/menu.png',
      iconSize: [30, 30], 
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });

    const iconPanaderia= L.icon ({
      iconUrl: '/assets/iconos/panaderia.png',
      iconSize: [30, 30], 
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });

    const iconSelected = L.icon({
      iconUrl: '/assets/iconos/menu.png',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });
    this.limpiarMarkers();

    negocios.forEach((negocio) => {

      if (negocio.latitud && negocio.longitud && negocio.categoria) {
        const lat = +negocio.latitud;
        const lng = +negocio.longitud;

      if (!isNaN(lat) && !isNaN(lng)) {
        let markerIcon;

        switch (negocio.categoria) {
          case 'restaurante':
            markerIcon = iconRestaurante;
            break;
          case 'panaderia':
            markerIcon = iconPanaderia;
            break;
          default:
            console.warn(`Categoría desconocida para el negocio: ${negocio.categoria}`);
             return;
             }

        const marker = L.marker([lat, lng], { icon: markerIcon })
        .addTo(this.map);
        
        marker.on('click', () => {
          this.map.eachLayer((layer: any) => {
            if (layer instanceof L.Marker) {
              layer.setIcon(iconRestaurante);
            }
          });

          marker.setIcon(iconSelected);
          this.seleccionarNegocio(negocio);
          this.irACard(negocio.id_negocio);
        });
    } else {
        console.error('Coordenadas inválidas para el negocio:', negocio);
      }
    } else {
      console.error('Faltan coordenadas para el negocio:', negocio);
    }
  });
  }

  irACard(id_negocio: number): void {
    const cardElement = document.getElementById(`card-${id_negocio}`);
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      this.negocios.forEach((n) => (n.seleccionado = false));
      const negocio = this.negocios.find((n) => n.id_negocio === id_negocio);
      if (negocio) negocio.seleccionado = true;
    }
  }

  seleccionarNegocio(negocio: Negocio): void {
    if (negocio.latitud && negocio.longitud) {
      const lat = +negocio.latitud;
      const lng = +negocio.longitud;
  
      if (!isNaN(lat) && !isNaN(lng)) {
        this.map.setView([lat, lng], 12);
  
        this.negocios.forEach((n) => (n.seleccionado = false));
        negocio.seleccionado = true;
      }
    } else {
      console.error('Coordenadas inválidas para el negocio:', negocio);
    }
  }

  calcularDistancia(lat1: number, lng1: number, lat2: number, lng2: number): number {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLng = (lng2 - lng1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
  
  actualizarNegociosCercanos(): void {
    const centro = this.map.getCenter();
    const latCentro = centro.lat;
    const lngCentro = centro.lng;
  
    this.negocios.forEach((negocio) => {
      if (negocio.latitud && negocio.longitud) {
        negocio.distancia = this.calcularDistancia(
          latCentro,
          lngCentro,
          +negocio.latitud,
          +negocio.longitud
        );
      }
    });
    this.negocios.sort((a, b) => (a.distancia || 0) - (b.distancia || 0));
  }

  seleccionarCategoria(categoria: string | null): void {
    this.categoriaSeleccionada = categoria;
    this.actualizarFiltrados();
    this.filtrarPorCategorias();
  }

  filtrarPorCategorias(): void {
    if (this.categoriasSeleccionadas.length === 0) {
      this.añadirMarkers(); // Muestra todos los negocios
      return;
    }
  
    const negociosFiltrados = this.negocios.filter(
      negocio => this.categoriasSeleccionadas.includes(negocio.categoria)
    );
  
    this.limpiarMarkers();
    this.añadirMarkers(negociosFiltrados);
  }
  
  limpiarMarkers(): void {
    this.map.eachLayer((layer: any) => {
      if (layer instanceof L.Marker) {
        this.map.removeLayer(layer);
      }
    });
  }
}