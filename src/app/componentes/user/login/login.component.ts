import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { Access } from '../../../interface/access';
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
  isModalOpen = false;
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
        next: (response: Access) => {
          console.log("Respuesta del servidor:", response);

          if (response?.message === 'Login OK') {
            this.guardarDatosUsuario(response);

            const esAdmin = response.data.user.roles?.includes('admin');
            const rutaDestino = esAdmin ? 'admin' : 'perfil';

            this.notificacionService.mostrarExito(`Hola ${response.data.user.nombre}`);
            this.router.navigate([rutaDestino]);
          } else {
            this.errorMessage = 'Error al iniciar sesión. Por favor, intenta de nuevo.';
          }
        },
        error: (error) => {
          console.error("Error al iniciar sesión:", error);
          this.errorMessage = 'No se pudo iniciar sesión. Verifica tus credenciales.';
        },
      });
    }
  }

  private guardarDatosUsuario(response: Access) {
    const { accessToken, data: { user } } = response;

    localStorage.setItem('token', accessToken);
    localStorage.setItem('user', JSON.stringify(user));
  }

  openModalLogin() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }
}
