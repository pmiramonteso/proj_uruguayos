import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  email: FormControl;
  password: FormControl;
  errorMessage: string | null = null;

  constructor( private authService: AuthService,  private router: Router) {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    })
  }
  
  onSubmit() {
    if (this.loginForm.valid) {
      this.errorMessage = null;

      this.authService.login(this.email.value, this.password.value).subscribe({
        next: response => {
          if (response.code === 1) {
            console.log('Login correcto');
            this.router.navigate(['/']);
          } else {
            console.error('Login incorrecto', response.message);
          }
        },
        error: error => {
          if (error.status === 401) {
            if (error.error.message === 'user No exist') {
              this.errorMessage = 'No estás registrado como usuario';
            } else if (error.error.message === 'Credenciales incorrectas') {
              this.errorMessage = 'Contraseña incorrecta';
            } else {
              this.errorMessage = 'Login incorrecto. Verifica tu email y/o contraseña';
            }
          } else {
            console.error('Login error', error);
          }
        }
      });
    }
  }
}