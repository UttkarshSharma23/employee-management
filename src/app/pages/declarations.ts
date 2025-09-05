import { DashboardComponent } from "./dashboard";
import { EmployeeComponent } from "./employee";
import { LayoutComponent } from "./layout";
import { LeaveComponent } from "./leave";
import { LoginComponent } from "./login";
import { EmployeeEndpointService, EmployeeService } from "./services";

export const components = [
  DashboardComponent,
  EmployeeComponent,
  LayoutComponent,
  LeaveComponent,
  LoginComponent,
];


export const providers = [
  EmployeeEndpointService,
  EmployeeService,
];
