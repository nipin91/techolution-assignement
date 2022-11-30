import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserList } from "./user";

@Component({
  selector: "angular-nx-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent {
  userlist = UserList; 
  constructor(public router: Router) {

  }


  setSelectedUserData = (data: any) => {
    localStorage.setItem('studentDetails', JSON.stringify(data));
    this.router.navigate([`/student/details/${data.birthdate}`])
  }
}
