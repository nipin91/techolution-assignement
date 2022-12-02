import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-nx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() options: any;

  setLocation(){
      window.location.href = this.options.redirectTo;
  }

}
