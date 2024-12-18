import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificacionComponent } from './componentes/notificacion/notificacion.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotificacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proj_uruguayos';
}
