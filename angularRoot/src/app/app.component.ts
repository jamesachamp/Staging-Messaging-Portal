import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
  <div>
    <nav class='navbar navbar-default'>
      <div class='container-fluid'>
        <a class='navbar-brand'>{{title}}</a>
        <ul class='nav navbar-nav'>
          <li><a [routerLink]="['/register']">Register</a></li>
        </ul>
      </div>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
})

export class AppComponent {
  title = 'Revature Staging';
}