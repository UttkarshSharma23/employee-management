import { Component } from "@angular/core";
import { EmployeeService } from "../../login/services";

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent {

  constructor(
    private _employee: EmployeeService
  ) { }

  getEmployeeList() {
      this._employee.getAllEmployees().subscribe({
        next : (res) => {
          if(!res) return;
          if(res.result) {}
        }
      })
  }
}
