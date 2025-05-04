import { PrerenderRoute } from '@angular/core';

export function getPrerenderRoutes(): PrerenderRoute[] {
  const ids = ['musikanlage', 'laser', 'sportbox','riesen-jenga','darts', 'lichter']; // <- diese IDs musst du mit deinen echten Produkt-IDs ersetzen
  return ids.map(id => ({
    path: `/produkte/${id}`
  }));
}
