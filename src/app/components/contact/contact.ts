import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, ScrollRevealDirective],
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
  sending = false;
  sendStatus: 'success' | 'error' | null = null;

  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!control && control.invalid && (control.touched || this.submitted);
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;
    this.sendStatus = null;
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { name, email, message } = this.contactForm.getRawValue();
    this.sending = true;

    try {
      const response = await fetch(environment.contactApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name ?? '',
          email: email ?? '',
          message: message ?? ''
        })
      });

      const result = await response.json().catch(() => ({ message: 'Invalid server response.' }));

      if (!response.ok) {
        throw new Error(result?.message || 'Unable to send message.');
      }

      this.sendStatus = 'success';
      this.contactForm.reset();
      this.submitted = false;
    } catch (error) {
      console.error('Contact form submission failed', error);
      this.sendStatus = 'error';
    } finally {
      this.sending = false;
    }
  }
}
