import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-panel-admin',
  standalone: true,
  imports: [],
  templateUrl: './panel-admin.component.html',
  styleUrl: './panel-admin.component.scss'
})
export class PanelAdminComponent {
  
  constructor(private router: Router) {}
  goHome() {
    this.router.navigate(['/home']);
}
}
