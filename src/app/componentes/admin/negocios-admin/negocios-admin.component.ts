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

  negocioForm!: FormGroup;
  tipoRedSocial: string | null = null;
  urlRedSocial: string | null = null;

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
  }

  onSubmit(): void {
  if (this.negocioForm.valid) {
    const formValue = this.negocioForm.value;
    // Llamamos al servicio para agregar el nuevo negocio
    this.negociosService.addNegocio(formValue).subscribe({
      next: (response) => {
        console.log('Negocio creado:', response);
      },
      error: (error) => {
        console.error('Error al crear negocio:', error);
      }
    });
}
}

onUpdate(negocio: Negocio): void {
  if (this.negocioForm.valid) {
    this.negociosService.updateNegocio(negocio).subscribe(
      (response) => {
        console.log('Negocio actualizado:', response);
      },
      (error) => {
        console.error('Error al actualizar negocio:', error);
      }
    );
  }
}

// Método para eliminar un negocio
onDelete(id: number): void {
  this.negociosService.deleteNegocio(id).subscribe(
    (response) => {
      console.log('Negocio eliminado:', response);
      // Aquí podrías actualizar la lista de negocios o hacer otras acciones después de la eliminación
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
      // Aquí podrías almacenar los negocios en una variable para mostrarlos en el componente
    },
    (error) => {
      console.error('Error al obtener negocios:', error);
    }
  );
}

}
