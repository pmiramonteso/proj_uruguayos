import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { NotificacionesService } from '../../../service/notificaciones.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: string | null = null;

  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  userName: string = '';
  userImage: string = 'assets/img/default-profile.png'; // Imagen predeterminada

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificacionService: NotificacionesService) {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.errorMessage = null;

      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe({
        next: response => {
          console.log("Respuesta del servidor:", response);

          if (response && response.message === 'Login OK') {
            localStorage.setItem('token', response.accessToken);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            const userRole = response.data.user.roles;

            this.isAdmin = userRole === 'admin';
            this.isLoggedIn = true;
            this.userName = response.data.user.nombre;
            this.userImage = response.data.user.photo || 'assets/img/default-profile.png'; // Validar profileImage

            if (this.isAdmin) {
              this.notificacionService.mostrarExito(`Hola ${response.data.user.nombre}`);
              this.router.navigate(['admin']);
            } else {
              this.notificacionService.mostrarExito(`Hola ${response.data.user.nombre}`);
              this.router.navigate(['perfil']);
            }
          } else {
            alert("Error al registrar por token");
          }
        },

        error: (error) => {
          console.log("Error al registrarse:", error);
        }
      });
    }
  }
}