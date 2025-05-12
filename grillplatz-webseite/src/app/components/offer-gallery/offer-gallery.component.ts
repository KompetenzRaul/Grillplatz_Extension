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
    

    // Angebote initialisieren
    this.offers = [
      {
        id: 'musikanlage',
        title: 'Musikanlage',
        imageUrl:'assets/musikanlage.jpg',
        price: 60
      },
      {
        id: 'laser',
        title: 'Laser-Lichtanlage',
        imageUrl:'assets/laser.jpg',
        price: 20
      },
      {
        id: 'sportbox',
        title: 'Sportbox',
        imageUrl:'assets/sportbox.jpg',
        price: 20
      },
      {
        id: 'riesen-jenga',
        title: 'Riesen-Jenga',
        imageUrl:'assets/riesen_jenga.jpg',
        price: 10
      },
      {
        id: 'darts',
        title: 'Darts',
        imageUrl:'assets/dartscheibe.jpg',
        price: 20
      },
      {
        id: 'paket-sport',
        title: '🏀 Sportpaket',
        imageUrl:'assets/sport_paket.jpg',
        price: 40,
        description: 'Enthält: Sportbox, Riesen-Jenga, Darts'
      },
      {
        id: 'paket-party',
        title: '🎉 Party-Paket',
        imageUrl:'assets/party_paket.jpg',
        price: 70,
        description: 'Enthält: Musikanlage und Laser-Lichtanlage'
      },
      {
        id: 'paket-allin',
        title: '🔥 All-In Paket',
        imageUrl:'assets/paket_allin.jpg',
        price: 100,
        description: 'Alle verfügbaren Extras in einem Rundum-sorglos-Paket!'
      }
    ];
  }

  ngAfterViewInit() {}

  onSlideChange(event: any) {
    this.activeIndex = event.page;
  }
}
