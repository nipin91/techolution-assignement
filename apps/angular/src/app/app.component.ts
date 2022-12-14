import { Component } from '@angular/core';

@Component({
  selector: 'angular-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';
  applicationName = 'Angular'
  options= {
    activeApplication: 'Angular',
    inactiveApplication: 'Application-b',
    redirectTo: "http://localhost:4202"
  }
}
