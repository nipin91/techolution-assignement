import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


@NgModule({})
export class ApplicationBSharedModule{
  static forRoot(): ModuleWithProviders<ApplicationBSharedModule> {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}
