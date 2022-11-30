import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details/details.component";
import { ListComponent } from "./list/list.component";
import { StudentRouting } from "./studen.route.module";

@NgModule({
  imports: [CommonModule, StudentRouting],
  declarations: [DetailsComponent, ListComponent],
  exports: [DetailsComponent, ListComponent],
})
export class StudentModule {}
