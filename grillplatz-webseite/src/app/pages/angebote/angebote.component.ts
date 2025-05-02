import { Component } from '@angular/core';
import { OfferGalleryComponent } from 'src/app/components/offer-gallery/offer-gallery.component';


@Component({
  selector: 'app-angebote',
  standalone: true,
  imports: [OfferGalleryComponent],
  templateUrl: './angebote.component.html',
  styleUrls: ['./angebote.component.css']
})
export class AngeboteComponent {}
