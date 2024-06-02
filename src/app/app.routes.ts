import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
