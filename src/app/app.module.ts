import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import 'hammerjs';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatSortModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { DuckListComponent } from './duck-list/duck-list.component';
import {HttpClientModule} from '@angular/common/http';
import {SightingsService} from './services/sightings.service';
import { ReportDucksComponent } from './report-ducks/report-ducks.component';


@NgModule({
  declarations: [
    AppComponent,
    DuckListComponent,
    ReportDucksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [SightingsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
