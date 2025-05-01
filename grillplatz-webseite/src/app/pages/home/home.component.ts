import { Component } from '@angular/core';
import { OfferGalleryComponent } from '@app/components/offer-gallery/offer-gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OfferGalleryComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent {}
