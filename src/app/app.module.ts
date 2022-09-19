import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaComponent } from './vista/vista.component';
import { SingUPComponent } from './sing-up/sing-up.component';
import { SingInComponent } from './sing-in/sing-in.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaComponent,
    SingUPComponent,
    SingInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
