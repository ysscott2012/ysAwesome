import { RouterModule, Routes } from '@angular/router';

// Components
import { AnalyticComponent } from './analytic.component';
import { AirbnbComponent } from './airbnb/airbnb.component';


const analyticRoutes: Routes = [
  { path: 'analytic',
    component: AnalyticComponent,
    children: [
      { path: 'analytics-airbnb', component: AirbnbComponent},
    ]
  }
];

export const AnalyticRouting = RouterModule.forChild(analyticRoutes);