import { Component } from '@angular/core';

@Component({
  selector: 'angular-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'application-b';
  options= {
    activeApplication: 'Application-b',
    inactiveApplication: 'Angular',
    redirectTo: "http://localhost:4201"
  }
}
