import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AngeboteComponent } from './pages/angebote/angebote.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';
import { ProduktDetailComponent } from './pages/produkt-detail/produkt-detail.component';
import { AuswahlComponent } from './pages/auswahl/auswahl.component';

export function getPrerenderParams() {
  return [
    { id: 'musikanlage' },
    { id: 'sportbox' },
    { id: 'laser' },
    { id: 'darts' },
    { id: 'lichter' },
    { id: 'riesen-jenga' },
    { id: 'paket-sport' },
    { id: 'paket-party' },
    { id: 'paket-allin' }
  ];
}

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'angebote', component: AngeboteComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  {path : 'produkte/:id', component: ProduktDetailComponent, data: { prerender: true, getPrerenderParams } },
  {path : 'anfrage', component: AuswahlComponent},

];