import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { EmployeeComponent } from './employee';
import { LeaveComponent } from './leave';
import { LayoutComponent } from './layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'leave', component: LeaveComponent },
    ]
  }
];
