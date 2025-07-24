import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {

  contactForm: FormGroup;
  private emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  // Variables para manejar el estado del envío
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;
  showSuccessModal = false;

    @ViewChild('skillsTitle') skillsTitle!: ElementRef<HTMLHeadingElement>;
    animateTitle = false;

    ngAfterViewInit() {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.animateTitle = true;
            observer.unobserve(this.skillsTitle.nativeElement); // solo una vez
          }
        },
        {
          threshold: 0.4// 30% visible
        }
      );

      if (this.skillsTitle?.nativeElement) {
        observer.observe(this.skillsTitle.nativeElement);
      }
    }

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  public isValidField(form: FormGroup, field: string): boolean | null {
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

  async onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitMessage = '';

      try {
        const serviceID = 'service_6kei5uo';
        const templateID = 'template_oqkbfgg';
        const autoReplyTemplateID = 'template_qwf527f';
        const publicKey = 'M_M4GjcWw8-3nuUtU';

        const now = new Date();
        const timeString = now.toLocaleString('es-CL', {
          timeZone: 'America/Santiago',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });

        const mainTemplateParams = {
          name: this.contactForm.value.name,
          email: this.contactForm.value.email,
          subject: this.contactForm.value.subject,
          message: this.contactForm.value.message,
          time: timeString,
          to_email: 'alanjeria01@gmail.com'
        };

        const autoReplyParams = {
          name: this.contactForm.value.name,
          email: this.contactForm.value.email,
          subject: this.contactForm.value.subject,
          message: this.contactForm.value.message,
          time: timeString,
          to_email: this.contactForm.value.email
        };

        // Enviar ambos emails EN PARALELO usando Promise.all
        const [mainResponse, autoReplyResponse] = await Promise.all([
          emailjs.send(serviceID, templateID, mainTemplateParams, publicKey),
          emailjs.send(serviceID, autoReplyTemplateID, autoReplyParams, publicKey)
        ]);

        console.log('Email principal enviado:', mainResponse);
        console.log('Auto-reply enviado:', autoReplyResponse);

        this.submitSuccess = true;
        this.showSuccessModal = true;
        this.contactForm.reset();

      } catch (error) {
        console.error('Error al enviar emails:', error);
        this.submitSuccess = false;
        this.submitMessage = 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.';
      } finally {
        this.isSubmitting = false;
      }
    }
  }

  closeSuccessModal() {
    this.showSuccessModal = false;
  }
}
