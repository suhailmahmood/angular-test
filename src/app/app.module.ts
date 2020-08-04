import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchResultTableComponent } from './search-result-table/search-result-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    SearchResultTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
