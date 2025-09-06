import { Component } from "@angular/core";


@Component({
  selector : 'layout',
  templateUrl :'./layout.component.html',
  styleUrls : ['./layout.component.scss']
})

export class LayoutComponent {

 menuItems = [
    { name: 'Dashboard', route: '/dashboard', icon: '📊' },
    { name: 'Employees', route: '/employee', icon: '👨‍💼' },
    { name: 'Leave Management', route: '/leave', icon: '🗓️' }
  ];

  constructor(
  ) { }
}
