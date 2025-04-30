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
    { id: '1', title: 'Musikanlage', imageUrl: '/assets/musikanlage.jpg' },
    { id: '2', title: 'Sportbox', imageUrl: '/assets/sportbox.jpg' },
    { id: '3', title: 'Dartscheibe', imageUrl: '/assets/dartscheibe.jpg' },
    { id: '4', title: 'Tischkicker', imageUrl: '/assets/tischkicker.jpg' },
    { id: '5', title: 'Tischtennisplatte', imageUrl: '/assets/tischtennis.jpg' },
    { id: '6', title: 'Lichter / LED', imageUrl: '/assets/lichter.jpg' }
  ];
}
