import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { EmployeeComponent } from './employee';
import { LeaveComponent } from './leave';
import { LayoutComponent } from './layout';
import { CountryDataComponent } from './country-data';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'leave', component: LeaveComponent },
      { path: 'country-data', component: CountryDataComponent }
    ]
  }
];
