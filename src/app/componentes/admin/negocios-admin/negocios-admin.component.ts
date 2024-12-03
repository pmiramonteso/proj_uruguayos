import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NegociosService } from '../../../service/negocios.service';
import { Negocio } from '../../../interface/negocio';
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

  constructor(private fb: FormBuilder, private negociosService: NegociosService) {}

  ngOnInit(): void {
    this.negocioForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      direccion: ['', Validators.required],
      latitud: ['', Validators.required],
      longitud: ['', Validators.required],
      tipoRedSocial: ['', Validators.required],
      urlRedSocial: ['', Validators.required],
      categoria: ['', Validators.required],
    });
    this.getNegocios();
  }
  limpiarFormulario(): void {
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
      console.log('Formulario enviado:', formValue);
      
      if (this.negocioEditando) {
        const negocioActualizado = { ...formValue, id_negocio: this.negocioEditando.id_negocio };
        console.log('Negocio actualizado:', negocioActualizado);
        this.negociosService.updateNegocio(negocioActualizado).subscribe({
          next: (response) => {
            console.log('Negocio actualizado:', response);
            this.getNegocios();
            this.limpiarFormulario();
          },
          error: (error) => {
            console.error('Error al actualizar negocio:', error);
          }
        });
      } else {
        this.negociosService.addNegocio(formValue).subscribe({
          next: (response) => {
            console.log('Negocio creado:', response);
            this.getNegocios();
            this.limpiarFormulario();
          },
          error: (error) => {
            console.error('Error al crear negocio:', error);
          }
        });
      }
    }
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

// Método para eliminar un negocio
onDelete(id: number): void {
  this.negociosService.deleteNegocio(id).subscribe(
    (response) => {
      console.log('Negocio eliminado:', response);
      // Aquí podrías actualizar la lista de negocios o hacer otras acciones después de la eliminación
      this.getNegocios();
    },
    (error) => {
      console.error('Error al eliminar negocio:', error);
    }
  );
}

// Método para obtener los negocios
getNegocios(): void {
  this.negociosService.getNegocios().subscribe(
    (negocios) => {
      console.log('Negocios obtenidos:', negocios);
      this.negocios = negocios;
      // Aquí podrías almacenar los negocios en una variable para mostrarlos en el componente
    },
    (error) => {
      console.error('Error al obtener negocios:', error);
    }
  );
}

}
