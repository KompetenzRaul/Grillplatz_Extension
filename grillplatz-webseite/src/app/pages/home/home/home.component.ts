import { Component } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import { OfferCardComponent } from '@app/components/offer-card/offer-card.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OfferCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  offers: Offer[] = [
    {
      id: '1',
      title: 'Hüpfburg',
      description: 'Für Kindergeburtstage und Spaß ohne Ende',
      imageUrl: 'assets/huepfburg.jpg',
    },
    {
      id: '2',
      title: 'Torwand',
      description: 'Wer trifft die Löcher? Fußballspaß für alle.',
      imageUrl: 'assets/torwand.jpg',
    },
  ];
}
