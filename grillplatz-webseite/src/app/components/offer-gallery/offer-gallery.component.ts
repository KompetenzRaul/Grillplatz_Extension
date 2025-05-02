import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
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

  offers = [
    { id: 'musikanlage', title: 'Musikanlage', imageUrl: '/assets/musikanlage.jpg', price: 60 },
    { id: 'laser', title: 'Laser-Lichtanlage', imageUrl: '/assets/laser.jpg', price: 20 },
    { id: 'sportbox', title: 'Sportbox', imageUrl: '/assets/sportbox.jpg', price: 20 },
    { id: 'riesen-jenga', title: 'Riesen-Jenga', imageUrl: '/assets/riesen_jenga.jpg', price: 10 },
    { id: 'darts', title: 'Darts', imageUrl: '/assets/dartscheibe.jpg', price: 20 },
    { id: 'lichter', title: 'Lichter', imageUrl: '/assets/lichter.jpg', price: 20 },
    {
      id: 'paket-sport',
      title: '🏀 Sportpaket',
      imageUrl: '/assets/sport_paket.jpg',
      price: 45,
      description: 'Enthält: Sportbox, Riesen-Jenga, Darts',
    },
    {
      id: 'paket-party',
      title: '🎉 Party-Paket',
      price: 65,
      imageUrl: '/assets/party_paket.jpg',
      description: 'Enthält: Musikanlage und Laser-Lichtanlage',
    },
    {
      id: 'paket-allin',
      title: '🔥 All-In Paket',
      imageUrl: '/assets/paket_allin.jpeg',
      price: 110,
      description: 'Alle verfügbaren Extras in einem Rundum-sorglos-Paket!',
    }
  ];

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    // Erzwingt ein erneutes Rendering nach dem Laden der View
    this.cdRef.detectChanges();
  }

  onSlideChange(event: any) {
    this.activeIndex = event.page;
  }
}
