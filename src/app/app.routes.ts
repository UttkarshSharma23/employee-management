import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages').then(p => p.PagesModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
