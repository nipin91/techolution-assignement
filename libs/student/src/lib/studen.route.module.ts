import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { DetailsComponent } from "./details/details.component";

export const appRoutes: Route[] = [
  {
    path: "list",
    component: ListComponent,
  },
  {
    path: "details/:id",
    component: DetailsComponent,
  },
  {
    path: "**",
    redirectTo: "list",
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class StudentRouting {}
