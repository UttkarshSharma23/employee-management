import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector : 'layout',
  templateUrl :'./layout.component.html',
  styleUrls : ['./layout.component.scss']
})

export class LayoutComponent {

 menuItems = [
    { name: 'Dashboard', route: 'dashboard', icon: '📊' },
    { name: 'Employees', route: 'employee', icon: '👨‍💼' },
    { name: 'Leave Management', route: 'leave', icon: '🗓️' },
    { name: 'Country Data', route: 'country-data', icon: '🌍' }
  ];

  constructor(
    private _router : Router
  ) { }

  onLogout() {
    localStorage.clear();
    this._router.navigateByUrl('login');
  }
}
