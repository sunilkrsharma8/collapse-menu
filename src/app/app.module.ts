import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExpansionOverviewComponent } from './expansion-overview/expansion-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpansionOverviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
