import { Routes } from "@angular/router";
import { LoginComponent } from "./login";
import { DashboardComponent } from "./dashboard";
import { EmployeeComponent } from "./employee";
import { LeaveComponent } from "./leave";
import { LayoutComponent } from "./layout";

export const routes : Routes = [
   {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'leave',
    component: LeaveComponent
  },
  {
    path: 'layout',
    component: LayoutComponent
  }

]
