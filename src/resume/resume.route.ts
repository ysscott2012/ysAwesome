import { RouterModule, Routes } from '@angular/router';

// Components
import { ResumeComponent } from './resume.component';


const ResumeRoutes: Routes = [
  { path: 'resume',
    component: ResumeComponent,
    children: [
      //{ path: 'analytics-airbnb', component: AirbnbComponent},
    ]
  }
];

export const ResumeRouting = RouterModule.forChild(ResumeRoutes);