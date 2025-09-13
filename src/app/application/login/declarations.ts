import { LoginComponent } from "./components";
import { EmployeeEndpointService, EmployeeService } from "./services";

export const components = [ LoginComponent];

export const providers = [
  EmployeeEndpointService,
  EmployeeService
];
