import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AngeboteComponent } from './pages/angebote/angebote.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'angebote',
    component: AngeboteComponent,
  },
  {
    path: 'kontakt',
    component: KontaktComponent
  }
];
