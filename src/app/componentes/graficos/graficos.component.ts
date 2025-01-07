import { Component } from '@angular/core';
import { GraficosAdminComponent } from '../admin/graficos-admin/graficos-admin.component';

@Component({
  selector: 'app-graficos',
  standalone: true,
  imports: [GraficosAdminComponent],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.scss'
})
export class GraficosComponent {

}
