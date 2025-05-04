import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'produkte/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const ids = ['musikanlage', 'laser', 'sportbox', 'riesen-jenga', 'darts', 'lichter'];
      return ids.map(id => ({ id }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
