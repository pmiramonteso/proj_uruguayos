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
  redSocialElegida: string | null = null;
  urlRedSocial: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.negocioForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      direccion: ['', Validators.required],
      tipoRedSocial: ['', Validators.required],
      urlRedSocial: ['', Validators.required],
      categoria: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.negocioForm.valid) {
      const formValue = this.negocioForm.value;
      this.redSocialElegida = formValue.tipoRedSocial;
      this.urlRedSocial = formValue.urlRedSocial;
      console.log('Formulario enviado:', formValue);
    }
  }
}
