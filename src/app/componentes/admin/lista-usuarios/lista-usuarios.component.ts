import { Component, OnInit } from '@angular/core';
import { User } from '../../../interface/user';
import { UsuariosService } from '../../../service/usuarios.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.scss'
})

export class ListaUsuariosComponent implements OnInit {
  usuarios: User[] = [];
  currentUser: User = {
    id_user: 0, // Ajusta a 0 para que siempre sea válido
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    roles: '',
    photo: '', // Si usas photo en el modelo, inicialízalo
  };
  showForm: boolean = false;

  constructor(private usuariosService: UsuariosService, private router: Router) {}

  ngOnInit() {
    if (!this.usuariosService.isAuthenticated()) {
      this.router.navigate(['/login']);
    } else {
      this.obtenerUsuarios();
    }
  }

  // Obtener todos los usuarios
  obtenerUsuarios() {
    if (!this.usuariosService.isAuthenticated()) {
      console.log('Usuario no autenticado');
      return;
    }

    this.usuariosService.obtenerTodos().subscribe({
      next: (data) => {
        this.usuarios = data; // Asignamos los usuarios recibidos
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error al obtener usuarios:', err.message);
      },
    });
  }

  // Añadir o editar un usuario
  guardarUsuario() {
    if (this.currentUser.id_user) {
      // Actualizar usuario
      this.usuariosService.actualizar(this.currentUser).subscribe({
        next: () => {
          this.obtenerUsuarios(); // Refresca la lista
          this.toggleForm(); // Oculta el formulario
        },
        error: (err: HttpErrorResponse) => {
          console.error('Error al actualizar usuario:', err.message);
        },
      });
    } else {
      // Añadir nuevo usuario
      this.usuariosService.ingresar(this.currentUser).subscribe({
        next: () => {
          this.obtenerUsuarios(); // Refresca la lista
          this.toggleForm(); // Oculta el formulario
        },
        error: (err: HttpErrorResponse) => {
          console.error('Error al añadir usuario:', err.message);
        },
      });
    }
  }

  // Eliminar un usuario
  eliminarUsuario(id_user: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.usuariosService.eliminar(id_user).subscribe({
        next: () => {
          this.obtenerUsuarios(); // Refresca la lista
        },
        error: (err: HttpErrorResponse) => {
          console.error('Error al eliminar usuario:', err.message);
        },
      });
    }
  }

  // Cargar datos para editar
  editarUsuario(user: User) {
    this.currentUser = { ...user }; // Copia el usuario seleccionado
    this.showForm = true; // Muestra el formulario
  }

  // Alternar formulario
  toggleForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm(); // Restablece el formulario si se oculta
    }
  }

  // Resetear el formulario
  resetForm() {
    this.currentUser = {
      id_user: 0, // Restablecemos al valor inicial
      nombre: '',
      apellidos: '',
      email: '',
      password: '',
      roles: '',
      photo: '',
    };
  }
}