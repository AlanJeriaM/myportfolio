import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {

  contactForm: FormGroup;
  private emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  public isValidField( form: FormGroup ,field : string): boolean | null{
    return form.controls[field].errors && form.controls[field].touched;
  }

  getFieldError(field: string): string | null {
    if (!this.contactForm.controls[field]) return null;

    const errors = this.contactForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
        case 'pattern':
          if (field === 'email') return 'Correo electrónico inválido';
          return 'Error de formato';
      }
    }
    return null;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
      // Aquí integrarías con tu servicio de envío de emails
      alert('¡Mensaje enviado correctamente! Te responderé pronto.');
      this.contactForm.reset();
    }
  }
}
