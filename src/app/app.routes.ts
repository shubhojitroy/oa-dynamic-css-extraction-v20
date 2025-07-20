import { Routes } from '@angular/router';
import { DynamicBrand } from './dynamic-brand/dynamic-brand';

export const routes: Routes = [
  { path: ':brand', component: DynamicBrand },

  { path: ':brand/:id', component: DynamicBrand },
];
