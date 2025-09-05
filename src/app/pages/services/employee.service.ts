import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EmployeeEndpointService } from "./employee-endpoint.service";
import { Observable } from "rxjs";

@Injectable()
export class EmployeeService {
  constructor(
    private _http: HttpClient,
    private _endPoint: EmployeeEndpointService

  ) { }

  employeeLeavelogin(emailId: string, password: string): Observable<any> {
    const body = { emailId, password };
    return this._http.post<any>(this._endPoint.postEmployeeLeave(), body)
  }
}

