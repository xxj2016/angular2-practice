import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NetworkStatusComponent } from './component/network-status/network-status.component';
import { EventBoardComponent } from './component/event-board/event-board.component';


@NgModule({
  declarations: [
    AppComponent,
    NetworkStatusComponent,
    EventBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
