import { Component } from '@angular/core';
import { PRODUKTE } from 'src/app/data/product-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-angebote',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './angebote.component.html',
  styleUrls: ['./angebote.component.css'],
})
export class AngeboteComponent {
  offers = PRODUKTE;
}
// 