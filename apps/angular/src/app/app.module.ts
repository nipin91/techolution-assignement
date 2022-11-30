import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouting, } from './app.routes';
import {SharedModule} from '@angular-nx/shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
