import { Component } from '@angular/core';
import { NavegacionComponent } from '../navegacion/navegacion.component';
import { ListaUsuariosComponent } from '../admin/lista-usuarios/lista-usuarios.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavegacionComponent, ListaUsuariosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
