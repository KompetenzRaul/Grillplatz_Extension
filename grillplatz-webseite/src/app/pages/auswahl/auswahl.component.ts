import { Component, OnInit } from '@angular/core';
import { AuswahlService } from 'src/app/services/auswahl.service';
import { Produkt } from 'src/app/data/product-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auswahl',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterModule],
  templateUrl: './auswahl.component.html',
  styleUrls: ['./auswahl.component.css']
})
export class AuswahlComponent implements OnInit {
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
  
  anfrageSenden(): void {
    if (!this.produkte.length) {
      alert('Bitte wähle mindestens ein Produkt aus.');
      return;
    }
  
    if (!this.form.vorname || !this.form.nachname || !this.form.email || !this.form.datum) {
      alert('Bitte fülle alle Felder aus.');
      return;
    }
  
    const zusammenfassung = `
      Anfrage von: ${this.form.vorname} ${this.form.nachname}
      E-Mail: ${this.form.email}
      Datum: ${this.form.datum}
      Produkte: ${this.produkte.map(p => p.title).join(', ')}
    `;
  
    console.log(zusammenfassung);
    alert('Deine Anfrage wurde lokal gespeichert (Demo-Modus).');

    
  
    // Hier kannst du später Mailversand oder Backend-Anbindung machen
  }

  getGesamtpreis(): number {
    return this.produkte.reduce((sum, p) => sum + p.price, 0);
  }
  
  
}
