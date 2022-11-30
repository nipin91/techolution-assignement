import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from '../../../application-b/src/app/app.component';
import { HomeComponent } from './home/home.component';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'nx-welcome',
    component: NxWelcomeComponent
  },
  {
    path: 'application-b-home',
    component: AppComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];
