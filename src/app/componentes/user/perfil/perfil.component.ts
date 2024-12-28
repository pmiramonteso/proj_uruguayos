import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavegacionComponent } from '../../navegacion/navegacion.component';
import { AuthService } from '../../../service/auth.service';
@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [NavegacionComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
  user: any;
  userImage = 'assets/img/default-profile.png';

  constructor(private router: Router, private authService: AuthService) {
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;
   
  }

  ngOnInit() {
    const user = this.authService.getUser();
  this.userImage = `http://localhost:3000/assets/img/${this.user.photo}` || 'assets/img/default-profile.png';
  }

  changeProfilePicture() {
    // Abrir un selector de archivos para que el usuario suba una nueva imagen
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.click();
  
    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        // Lógica para subir la imagen y actualizar la foto de perfil
        this.uploadPhoto(file);
      }
    };
  }
  
  uploadPhoto(file: File) {
    // Aquí puedes usar un servicio para subir la imagen al servidor o Firebase
    const formData = new FormData();
    formData.append('profilePicture', file);
  
    // Enviar la solicitud para subir la imagen (esto depende de cómo esté configurado tu backend)
    this.authService.uploadPhoto(formData).subscribe((response) => {
      if (response.success) {
        // Actualizar la URL de la imagen de perfil en el componente
        this.user.profilePictureUrl = response.imageUrl;
      }
    });
  }

  
  logout() {
    localStorage.clear();
    this.router.navigate(['home']);
  }
}
