import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SeccioncompComponent } from './seccioncomp/seccioncomp.component';
import { SeccionlateralComponent } from './seccionlateral/seccionlateral.component';
import { SeccionabajoComponent } from './seccionabajo/seccionabajo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SeccioncompComponent,
    SeccionlateralComponent,
    SeccionabajoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
