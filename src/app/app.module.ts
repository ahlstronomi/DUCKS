import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import 'hammerjs';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatInputModule, MatSortModule, MatToolbarModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import {DuckListComponent} from './duck-list/duck-list.component';
import {HttpClientModule} from '@angular/common/http';
import {SightingsService} from './services/sightings.service';
import {ReportDucksComponent} from './report-ducks/report-ducks.component';
import {TimeAgoPipe} from 'time-ago-pipe';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


const appRoutes: Routes = [
  { path: 'duck-list', component: DuckListComponent },
  { path: 'report-ducks', component: ReportDucksComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    DuckListComponent,
    ReportDucksComponent,
    TimeAgoPipe,
    NavbarComponent,
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
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatToolbarModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [SightingsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
