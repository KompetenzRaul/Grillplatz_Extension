import { Component, OnInit } from '@angular/core';
import { AuswahlService } from 'src/app/services/auswahl.service';
import { Produkt } from 'src/app/data/product-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-auswahl',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './auswahl.component.html',
  styleUrls: ['./auswahl.component.css']
})


export class AuswahlComponent implements OnInit {

  showSuccessPopup = false;
  successMessage = '';


  produkte: Produkt[] = [];

  constructor(private auswahlService: AuswahlService) { }

  ngOnInit(): void {
    this.produkte = this.auswahlService.getAuswahl();
  }

  entferne(id: string) {
    this.auswahlService.removeProdukt(id);
    this.produkte = this.auswahlService.getAuswahl();
  }

  leeren(): void {
    const bestaetigt = window.confirm('Möchtest du wirklich deine gesamte Auswahl entfernen?');
    if (bestaetigt) {
      this.auswahlService.clear();
      this.produkte = [];
    }
  }
  anzeigenDialog = false;

  zeigeDialog() {
    this.anzeigenDialog = true;
  }

  abbrechen() {
    this.anzeigenDialog = false;
  }

  bestaetigen() {
    this.auswahlService.clear();
    this.produkte = [];
    this.anzeigenDialog = false;
  }

  form = {
    vorname: '',
    nachname: '',
    datum: '',
    email: '',
    notiz: ''
  };


  getGesamtpreis(): number {
    return this.produkte.reduce((sum, p) => sum + p.price, 0);
  }

  anfrageSenden(): void {
    if (!this.produkte.length) {
      alert('Bitte wähle mindestens ein Produkt aus.');
      return;
    }
  
    if (!this.form.vorname || !this.form.nachname || !this.form.email || !this.form.datum) {
      alert('Bitte fülle alle Felder aus.');
      return;
    }
  
    const templateParams = {
      vorname: this.form.vorname,
      nachname: this.form.nachname,
      email: this.form.email,
      datum: this.form.datum,
      notiz: this.form.notiz || 'Keine',
      produkte: this.produkte.map(p => p.title).join(', ')
    };
  
    emailjs.send('service_Anfragen', 'template_os9m9k2', templateParams, 'rNufsCOoXqgkmyJPr')
      .then(() => {
        this.successMessage = '✅ Deine Anfrage wurde erfolgreich gesendet!<br> Wir melden uns bald bei dir.';
        this.showSuccessPopup = true;
  
        this.form = { vorname: '', nachname: '', datum: '', email: '', notiz: '' };
  
        setTimeout(() => {
          this.showSuccessPopup = false;
        }, 3000);
      })
      .catch((error) => {
        console.error('Fehler beim Senden:', error);
        alert('❌ Es gab ein Problem beim Senden deiner Anfrage.');
      });
  }
}  

