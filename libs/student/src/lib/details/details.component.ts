import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-nx-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  user: any; 
  constructor() {
    const data = localStorage.getItem('studentDetails');
    if(data) {
      this.user = JSON.parse(data)
    }
  }
}
