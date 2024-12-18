import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavegacionComponent } from '../../navegacion/navegacion.component';
@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [NavegacionComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
  user: any;

  constructor(private router: Router) {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['home']);
  }
}
