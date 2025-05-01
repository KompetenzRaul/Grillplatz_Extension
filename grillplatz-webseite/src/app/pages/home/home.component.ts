import { Component } from '@angular/core';
import { OfferGalleryComponent } from '@app/components/offer-gallery/offer-gallery.component';
import { NavbarComponent } from '@app/components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OfferGalleryComponent, NavbarComponent],
  template: `<app-offer-gallery></app-offer-gallery>`,
})
export class HomeComponent {}
