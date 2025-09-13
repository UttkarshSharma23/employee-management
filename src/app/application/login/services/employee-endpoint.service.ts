import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeEndpointService {
  postEmployeeLeave(): string {
    return 'https://freeapi.miniprojectideas.com/api/EmployeeLeave/Login';
  }

  getAllEmployees() : string {
    return 'https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetEmployees';
  }
}


