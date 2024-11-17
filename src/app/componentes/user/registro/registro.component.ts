import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  registroForm: FormGroup;
  nombre: FormControl;
  apellidos: FormControl;
  email: FormControl;
  password: FormControl;
  selectedFile: File | null = null;
  correoEnUso: string | null = null;

  constructor( private authService: AuthService, private router: Router) {
    
      this.nombre = new FormControl('', Validators.required);
      this.apellidos = new FormControl('', Validators.required);
      this.email = new FormControl('', [Validators.required, Validators.email]);
      this.password = new FormControl('', [
        Validators.required,
        Validators.minLength(6)]);
      
      this.registroForm = new FormGroup({
      nombre: this.nombre,
      apellidos: this.apellidos,
      email: this.email,
      password: this.password,
      });
    }

    onFileSelected(event: Event) {
      const fileInput = event.target as HTMLInputElement;
      if (fileInput && fileInput.files && fileInput.files.length > 0) {
        this.selectedFile = fileInput.files[0];
      }
    }
  onSubmit() {
    if (this.registroForm.valid) {
      this.correoEnUso = null;

      const formData = new FormData();
      formData.append('nombre', this.nombre.value);
      formData.append('apellidos', this.apellidos.value);
      formData.append('email', this.email.value);
      formData.append('password', this.password.value);

      if (this.selectedFile) {
        formData.append('file', this.selectedFile);
      }
      //Verifico que recibo datos
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
      this.authService.registro(formData).subscribe({
        next: response => {
          if (response.code === 1) {
            console.log('Registro correcto');
            if (response.token) {
              localStorage.setItem('token', response.token);
            }

            if (response.data && response.data.user) {
              localStorage.setItem('user', JSON.stringify(response.data.user));
              const userObj = response.data.user;
              this.authService.setUserId(userObj.id_user);
            }
            this.router.navigate(['/']);
          } else {
            console.error('Registration failed', response.message);
          }
        },
        error: error => {
          console.error('Error en registro', error);
          if (error.status === 400) {
            console.error('Detalles del error:', error.error);
          if (error.status === 400 && error.error.message === 'Existe un usuario con este correo electrónico') {
            this.correoEnUso = 'Ya existe este correo';
          }
        }
        }
      });
    }
  }
}