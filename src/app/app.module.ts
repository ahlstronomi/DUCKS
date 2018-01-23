import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import 'hammerjs';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatSortModule} from '@angular/material';

import { DuckListComponent } from './duck-list/duck-list.component';
import {HttpClientModule} from '@angular/common/http';
import {SightingsService} from './services/sightings.service';


@NgModule({
  declarations: [
    AppComponent,
    DuckListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [SightingsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
