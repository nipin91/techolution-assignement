import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TecholutionUiModule } from '@angular-nx/techolution-ui';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomeComponent } from './home/home.component';
import { appRoutes, } from './app.routes';
import {ApplicationBSharedModule} from '../../../application-b/src/app/app.module'

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomeComponent],
  imports: [
    BrowserModule,
    TecholutionUiModule,
    ApplicationBSharedModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
