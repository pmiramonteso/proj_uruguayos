import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-negocios-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './negocios-admin.component.html',
  styleUrl: './negocios-admin.component.scss'
})
export class NegociosAdminComponent {

  negocioForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.negocioForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      direccion: ['', Validators.required],
      redesSociales: ['', Validators.required],
      categoria: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.negocioForm.valid) {
      console.log(this.negocioForm.value);
      // Aquí manejas el envío del formulario
    }
  }
}
