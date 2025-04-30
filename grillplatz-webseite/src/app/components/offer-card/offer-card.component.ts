import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Offer } from '@app/models/offer.model';

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent {
  @Input() offer!: Offer;
}
