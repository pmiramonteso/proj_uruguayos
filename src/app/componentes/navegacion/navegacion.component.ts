import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { LoginComponent } from '../user/login/login.component';
import { RegistroComponent } from '../user/registro/registro.component';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterModule, LoginComponent, RegistroComponent],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.scss'
})
export class NavegacionComponent {

  isMobileMenuOpen = false;
  isMobileMenu = false;
  showLoginModal: boolean = false;
  showRegistroModal= true;
  isAdmin = false;
  isLoggedIn = false;
  userName = '';
  userImage: string = "/assets/img/avatar-IG.png";
  isDropdownMenuOpen = false;

  constructor(public router: Router, private authService: AuthService) {}
  ngOnInit() {
    const user = this.authService.getUser();
    this.isLoggedIn = !!user;
    this.userName = user.nombre || '';
    this.userImage = user?.photo
  ? `http://localhost:3000/assets/img/${user.photo}`
  : '/assets/img/avatar-IG.png';
    this.isAdmin = Array.isArray(user['roles']) && user['roles'].includes('admin');
    
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
    this.authService.logout().subscribe({
      next: () => {
        this.isLoggedIn = false;
        this.userName = '';
        this.userImage = '/assets/img/avatar-IG.png';
        localStorage.removeItem('token');
        localStorage.removeItem('user');
  
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error cerrando sesión:', err);
      },
    });
  }

  openModalLogin() {
    this.showLoginModal = true;
  }
  openModalRegistro() {
    this.showRegistroModal = true;
  }
}
