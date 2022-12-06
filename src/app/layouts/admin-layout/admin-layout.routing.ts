import { Routes } from '@angular/router';

import { PredictionsComponent } from 'app/predictions/predictions.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    {
      path: '',
      children: [
        {
            path: 'dashboard',
            component: DashboardComponent
        },
        {
            path: 'predictions',
            component: PredictionsComponent
        }
    ]}
];
