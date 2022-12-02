import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "@angular-nx/home";
import { AboutUsComponent } from "@angular-nx/about-us";
export const appRoutes: Route[] = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about-us",
    component: AboutUsComponent,
  },
  {
    path: "student",
    loadChildren: () =>
      import("@angular-nx/student").then((module) => module.StudentModule),
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRouting {}
