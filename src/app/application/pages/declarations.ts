import { EmployeeEndpointService, EmployeeService } from "../login/services";
import { CountryDataComponent } from "./country-data";
import { DashboardComponent } from "./dashboard";
import { EmployeeComponent } from "./employee";
import { LayoutComponent } from "./layout";
import { LeaveComponent } from "./leave";

export const components = [
  DashboardComponent,
  EmployeeComponent,
  LayoutComponent,
  LeaveComponent,
  CountryDataComponent
];


export const providers = [
  EmployeeService,
  EmployeeEndpointService
];
