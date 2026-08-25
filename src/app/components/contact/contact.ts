import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

const CONTACT_EMAIL = 'santhosh.kumar@example.com';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  private readonly formBuilder = inject(FormBuilder);
  readonly contactForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });
  submitted = false;

  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!control && control.invalid && (control.touched || this.submitted);
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { name, email, message } = this.contactForm.getRawValue();
    const subject = `Portfolio enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
