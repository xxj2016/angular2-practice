import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NetworkStatusComponent } from './component/network-status/network-status.component';


@NgModule({
  declarations: [
    AppComponent,
    NetworkStatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
