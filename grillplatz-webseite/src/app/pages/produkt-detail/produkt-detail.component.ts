import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PRODUKTE, Produkt } from 'src/app/data/product-data';
import { AuswahlService } from 'src/app/services/auswahl.service';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';


@Component({
  selector: 'app-produkt-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produkt-detail.component.html',
  styleUrls: ['./produkt-detail.component.css'],
  animations: [
    trigger('zoomIn', [
      transition('* => *', [
        style({ transform: 'scale(0.8)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})    

export class ProduktDetailComponent implements OnInit {
  produkt!: Produkt;
  istAusgewaehlt = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auswahlService: AuswahlService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const produkt = PRODUKTE.find(p => p.id === id);

    if (!produkt) {
      this.router.navigate(['/angebote']);
      return;
    }

    this.produkt = produkt;
    this.istAusgewaehlt = this.auswahlService.isAusgewaehlt(this.produkt.id);
  }

  toggleAuswahl(): void {
    if (this.istAusgewaehlt) {
      this.auswahlService.removeProdukt(this.produkt.id);
    } else {
      this.auswahlService.addProdukt(this.produkt);
    }

    this.istAusgewaehlt = !this.istAusgewaehlt;
  }

  currentImageIndex: number = 0;

nextImage(): void {
  if (this.produkt.imageUrls) {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.produkt.imageUrls.length;
  }
}

prevImage(): void {
  if (this.produkt.imageUrls) {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.produkt.imageUrls.length) % this.produkt.imageUrls.length;
  }
}

}
