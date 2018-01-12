import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
