import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StatsComponent } from './components/stats/stats.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'stats',
    component: StatsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
