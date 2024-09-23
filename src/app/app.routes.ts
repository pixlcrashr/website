import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: '',
    title: 'pixlcrashr.dev',
    loadComponent: () => import('./landing/landing.component').then(c => c.LandingComponent)
  },
  {
    path: 'imprint',
    title: 'pixlcrashr.dev | impressum',
    loadComponent: () => import('./imprint/imprint.component').then(c => c.ImprintComponent)
  }
];
