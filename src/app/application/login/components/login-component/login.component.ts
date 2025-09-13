import { Component } from "@angular/core";
import { Employee } from "../../../../models";

import { Router } from "@angular/router";
import { EmployeeService } from "../../services";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls : ['./login.component.scss']
})

export class LoginComponent {

  employeeLogin: Employee = new Employee();

  constructor(
    private _employee: EmployeeService,
    private _router: Router
  ) { }

  onLogin() {
    this._employee.employeeLeavelogin(
      this.employeeLogin.emailId,
      this.employeeLogin.password
    ).subscribe({
      next: (result) => {
        if (result.result) {
          alert("Login Successful");
          localStorage.setItem('leaveUser', JSON.stringify(result.data));
          this._router.navigate(['/pages']);
        }
        else {
          alert(result.message);
        }
      },
      error: () => {
        alert("Something went wrong");
      }
    })
    console.log(this.employeeLogin);
  }

}

//ng new test-app --no-standalone
