import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { NotificacionesService } from '../../../service/notificaciones.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  selectedFile: File | null = null;
  correoEnUso: string | null = null;
  registroForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private notificacionService: NotificacionesService,
  ) {
    this.registroForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&.]{6,}$/)
      ]),
    });
  }
  

  // Método para manejar la selección de archivos
  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
      console.log('Archivo seleccionado:', this.selectedFile);
    }
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.registroForm.valid) {
      this.correoEnUso = null;
  
      const formData = new FormData();
      const { nombre, apellidos, email, password } = this.registroForm.value;
      
      formData.append('nombre', nombre);
      formData.append('apellidos', apellidos);
      formData.append('email', email);
      formData.append('password', password);
  
      // Agregar el archivo si se seleccionó
      if (this.selectedFile) {
        formData.append('photo', this.selectedFile);
      }
  
      // Llamar al servicio
      this.authService.registro(formData).subscribe({
        next: (response) => {
          if (response.accessToken) {
            localStorage.setItem('token', response.accessToken);
            localStorage.setItem('user', JSON.stringify(response.data.user));
  
            const userRole = response.data.user.roles;
  
            if (userRole === 'admin') {
              this.notificacionService.mostrarExito(`Registrado con éxito ${response.data.user.nombre}`);
              this.router.navigate(['admin']);
            } else {
              this.notificacionService.mostrarExito(`Registrado con éxito ${response.data.user.nombre}`);
              this.router.navigate(['perfil']);
            }
          } else {
            alert('Error al registrar por token');
          }
        },
        error: (error) => {
          console.log('Error al registrarse', error);
        }
      });
    }
  }
}