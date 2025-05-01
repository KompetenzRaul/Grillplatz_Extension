import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offer-gallery',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule],
  templateUrl: './offer-gallery.component.html',
  styleUrls: ['./offer-gallery.component.css']
})
export class OfferGalleryComponent {
  activeIndex: number = 0;

  offers = [
    { id: '1', title: 'Musikanlage', imageUrl: '/assets/musikanlage.jpg', price: 60 },
    { id: '2', title: 'Sportbox', imageUrl: '/assets/sportbox.jpg', price: 20 },
    { id: '3', title: 'Dartscheibe', imageUrl: '/assets/dartscheibe.jpg', price: 15 },
    { id: '4', title: 'Tischkicker', imageUrl: '/assets/tischkicker.jpg', price: 20 },
    { id: '5', title: 'Tischtennisplatte', imageUrl: '/assets/tischtennis.jpg', price: 20 },
    { id: '6', title: 'Lichter / LED', imageUrl: '/assets/lichter.jpg', price: 10 }
  ];

  onSlideChange(event: any) {
    this.activeIndex = event.page;
  }
}
