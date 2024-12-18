import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.scss'
})
export class NavegacionComponent {
  isMobileMenuOpen = false;
  isAdmin = false;
  isLoggedIn = false;
  userName = '';
  userImage = 'assets/img/default-profile.png'; //BUSCAR FOTO
  isDropdownMenuOpen = false;

  constructor(public router: Router, private authService: AuthService) {}

  ngOnInit() {
    const user = this.authService.getUser();
    this.isLoggedIn = !!user;
    this.userName = user.nombre || '';
    this.userImage = `http://localhost:3000/assets/img/${user.photo}` || 'assets/img/default-profile.png';
    this.isAdmin = user['roles']?.includes('admin');
    
    console.log('Roles:', user?.roles);
    console.log('Is Admin:', this.isAdmin);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

toggleDropdownMenu(): void {
  this.isDropdownMenuOpen = !this.isDropdownMenuOpen;
}
  logout(): void {
    this.isLoggedIn = false;
    this.userName = '';
    this.userImage = 'assets/img/default-profile.png'; // Reestablece la imagen a la predeterminada
    this.router.navigate(['/login']);
  }
}
