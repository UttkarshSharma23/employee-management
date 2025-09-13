import { EmployeeEndpointService, EmployeeService } from "../login/services";
import { DashboardComponent } from "./dashboard";
import { EmployeeComponent } from "./employee";
import { LayoutComponent } from "./layout";
import { LeaveComponent } from "./leave";

export const components = [
  DashboardComponent,
  EmployeeComponent,
  LayoutComponent,
  LeaveComponent,
];


export const providers = [
  EmployeeService,
  EmployeeEndpointService
];
