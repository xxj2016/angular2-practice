import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NetworkStatusComponent } from './component/network-status/network-status.component';
import { EventBoardComponent } from './component/event-board/event-board.component';
import { PartsListComponent } from './component/parts-list/parts-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NetworkStatusComponent,
    EventBoardComponent,
    PartsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
