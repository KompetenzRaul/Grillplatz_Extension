import { Component, Inject, AfterViewInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-offer-gallery',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule, RouterModule],
  templateUrl: './offer-gallery.component.html',
  styleUrls: ['./offer-gallery.component.css']
})
export class OfferGalleryComponent implements AfterViewInit {
  activeIndex: number = 0;
  baseHref: string = '';
  offers: any[] = [];

  constructor(@Inject(DOCUMENT) private document: Document) {
    // Holt das <base href="..."> aus index.html
    this.baseHref = document.getElementsByTagName('base')[0].getAttribute('href') || '';

    // Angebote initialisieren
    this.offers = [
      {
        id: 'musikanlage',
        title: 'Musikanlage',
        imageUrl: this.baseHref + 'assets/musikanlage.jpg',
        price: 60
      },
      {
        id: 'laser',
        title: 'Laser-Lichtanlage',
        imageUrl: this.baseHref + 'assets/laser.jpg',
        price: 20
      },
      {
        id: 'sportbox',
        title: 'Sportbox',
        imageUrl: this.baseHref + 'assets/sportbox.jpg',
        price: 20
      },
      {
        id: 'riesen-jenga',
        title: 'Riesen-Jenga',
        imageUrl: this.baseHref + 'assets/riesen_jenga.jpg',
        price: 10
      },
      {
        id: 'darts',
        title: 'Darts',
        imageUrl: this.baseHref + 'assets/dartscheibe.jpg',
        price: 20
      },
      {
        id: 'lichter',
        title: 'Lichter',
        imageUrl: this.baseHref + 'assets/lichter.jpg',
        price: 20
      },
      {
        id: 'paket-sport',
        title: '🏀 Sportpaket',
        imageUrl: this.baseHref + 'assets/sport_paket.jpg',
        price: 45,
        description: 'Enthält: Sportbox, Riesen-Jenga, Darts'
      },
      {
        id: 'paket-party',
        title: '🎉 Party-Paket',
        imageUrl: this.baseHref + 'assets/party_paket.jpg',
        price: 70,
        description: 'Enthält: Musikanlage und Laser-Lichtanlage'
      },
      {
        id: 'paket-allin',
        title: '🔥 All-In Paket',
        imageUrl: this.baseHref + 'assets/paket_allin.jpg',
        price: 110,
        description: 'Alle verfügbaren Extras in einem Rundum-sorglos-Paket!'
      }
    ];
  }

  ngAfterViewInit() {}

  onSlideChange(event: any) {
    this.activeIndex = event.page;
  }
}
