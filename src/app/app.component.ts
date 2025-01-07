import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { NotificacionComponent } from './componentes/notificacion/notificacion.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotificacionComponent, NavegacionComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  showNavbar: boolean = true;
  title = 'proj_uruguayos';
  noNavbarRoutes: string[] = ['/login', '/registro', '/admin'];
  excludeMargin = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects.split('?')[0];
        this.showNavbar = !this.noNavbarRoutes.includes(currentUrl);
        this.excludeMargin = ['/home', '/admin'].includes(currentUrl);
      }
    });
  }
}
