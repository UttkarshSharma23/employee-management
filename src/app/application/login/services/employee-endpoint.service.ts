import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeEndpointService {

  baseEndPoint : string  = 'https://freeapi.miniprojectideas.com/api';


  postEmployeeLeave(): string {
    return `${this.baseEndPoint}/EmployeeLeave/Login`;
  }

  getAllEmployees() : string {
    return `${this.baseEndPoint}/EmployeeLeave/GetEmployees`;
  }
}


