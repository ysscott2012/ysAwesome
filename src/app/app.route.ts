import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { AnalyticComponent } from '../analytic/analytic.component'

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'analytic', component: AnalyticComponent}
  //{ path: '**', component: NotFound }, //always last
];

export const AppRouting = RouterModule.forRoot(appRoutes, { 
  useHash: true
});