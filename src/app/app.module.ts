import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserModule } from '@angular/platform-browser';

import { KyoAngularUiLibModule } from 'kyo-angular-ui-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    KyoAngularUiLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
