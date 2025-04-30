import { Component } from '@angular/core';
import { OfferGalleryComponent } from '@app/components/offer-gallery/offer-gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OfferGalleryComponent],
  template: `<app-offer-gallery></app-offer-gallery>`,
})
export class HomeComponent {}
