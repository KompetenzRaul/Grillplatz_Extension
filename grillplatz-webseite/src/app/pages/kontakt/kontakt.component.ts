import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.css'
})
export class KontaktComponent {
  form = {
    name: '',
    email: '',
    notiz: ''
  };

  showSuccessPopup = false;
  successMessage = '';

  senden() {
    if (!this.form.name.trim() || !this.form.email.trim() || !this.form.notiz.trim()) {
      alert('Bitte fülle alle Felder aus.');
      return;
    }

    const templateParams = {
      vorname: this.form.name,
      nachname: '', // Optional leer
      email: this.form.email,
      notiz: this.form.notiz
    };

    emailjs.send('service_Anfragen', 'template_Kontaktanfrage', templateParams, 'rNufsCOoXqgkmyJPr')
      .then(() => {
        this.successMessage = '✅ Deine Nachricht wurde erfolgreich gesendet!<br> Wir melden uns bald bei dir.';
        this.showSuccessPopup = true;
        this.form = { name: '', email: '', notiz: '' };

        setTimeout(() => {
          this.showSuccessPopup = false;
        }, 3000);
      })
      .catch((error) => {
        console.error('Fehler beim Senden:', error);
        alert('❌ Es gab ein Problem beim Senden der Nachricht.');
      });
  }
}
