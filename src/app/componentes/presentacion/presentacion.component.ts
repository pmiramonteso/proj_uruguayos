import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavegacionComponent } from '../navegacion/navegacion.component';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [FooterComponent, NavegacionComponent],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.scss'
})
export class PresentacionComponent {

}
