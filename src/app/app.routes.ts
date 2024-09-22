import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing/landing.component').then(c => c.LandingComponent)
  },
  {
    path: 'imprint',
    loadComponent: () => import('./imprint/imprint.component').then(c => c.ImprintComponent)
  }
];
