import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NegociosService } from '../../../service/negocios.service';
import { Negocio } from '../../../interface/negocio';
import { NotificacionesService } from '../../../service/notificaciones.service';
@Component({
  selector: 'app-negocios-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './negocios-admin.component.html',
  styleUrl: './negocios-admin.component.scss'
})
export class NegociosAdminComponent implements OnInit{
  negocios: Negocio[] = [];
  negocioForm!: FormGroup;
  tipoRedSocial: string | null = null;
  urlRedSocial: string | null = null;
  negocioEditando: any = null;
  mostrarFormulario: boolean = false;
  editando = false;
  agregando = false;

  constructor(private fb: FormBuilder, private negociosService: NegociosService, private notificationService: NotificacionesService) {}

  ngOnInit(): void {
    this.negocioForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      direccion: ['', Validators.required],
      latitud: [''],
      longitud: [''],
      tipoRedSocial: [''],
      urlRedSocial: [''],
      categoria: ['', Validators.required],
    });
    this.obtenerNegocios();
  }
  obtenerNegocios(): void {
    this.negociosService.obtenerNegocios().subscribe(
      (negocios) => {
        console.log('Negocios obtenidos:', negocios);
        this.negocios = negocios;
      },
      (error) => {
        console.error('Error al obtener negocios:', error);
      }
    );
  }
  
  limpiarFormulario(): void {
    this.editando = false;
    this.agregando = false;
    this.negocioForm.reset();
    this.negocioEditando = null;
    this.mostrarFormulario = false;
  }

  agregarNegocio(): void {
    this.mostrarFormulario = !this.mostrarFormulario;
    this.editando = false;
    this.agregando = true;
  
    if (this.negocioForm.valid) {
      const formValue = this.negocioForm.value;
      
    formValue.latitud = formValue.latitud || null;
    formValue.longitud = formValue.longitud || null
    console.log('Formulario con valores:', formValue); 

      if (this.negocioEditando) {
        const negocioActualizado = { ...formValue, id_negocio: this.negocioEditando.id_negocio };
        this.negociosService.actualizarNegocio(negocioActualizado).subscribe({
          next: (response) => {
            this.notificationService.mostrarExito('Negocio actualizado con éxito');
            this.limpiarFormulario();
            this.obtenerNegocios();
          },
          error: (error) => {
            this.notificationService.mostrarError('Error al actualizar el negocio');
            console.error('Error al actualizar negocio:', error);
          }
        });
      } else {
        this.negociosService.crearNegocio(formValue).subscribe({
          next: (response) => {
            this.notificationService.mostrarExito('Negocio creado con éxito');
            this.limpiarFormulario();
            this.obtenerNegocios();
          },
          error: (error) => {
            this.notificationService.mostrarError('Error al crear el negocio');
            console.error('Error al crear negocio:', error);
          }
        });
      }
    }
    this.obtenerNegocios();
  }

editarNegocio(negocio: Negocio): void {
  this.editando = true;
  this.agregando = false;

  this.negocioEditando = negocio;
  this.negocioForm.setValue({
    nombre: negocio.nombre,
    descripcion: negocio.descripcion,
    direccion: negocio.direccion,
    latitud: negocio.latitud,
    longitud: negocio.longitud,
    tipoRedSocial: negocio.tipoRedSocial || '',
    urlRedSocial: negocio.urlRedSocial,
    categoria: negocio.categoria
  });
  this.mostrarFormulario = true;
}

eliminarNegocio(id: number): void {
  if (confirm('¿Estás seguro de que deseas eliminar este blog?')) {
  this.negociosService.eliminarNegocio(id).subscribe(
    (response) => {
      this.notificationService.mostrarExito('Negocio eliminado con éxito');
      this.obtenerNegocios();
    },
    (error) => {
      console.error('Error al eliminar negocio:', error);
      this.notificationService.mostrarError('No se pudo eliminar el negocio');
    }
  );
}
}
}
