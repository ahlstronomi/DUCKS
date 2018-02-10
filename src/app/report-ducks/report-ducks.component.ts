///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {SightingsService} from '../services/sightings.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-report-ducks',
  templateUrl: './report-ducks.component.html',
  styleUrls: ['./report-ducks.component.scss']
})
export class ReportDucksComponent implements OnInit {

  count: number;
  description: string;
  species: string;
  dateTime = new Date();

  constructor(public sightingsService: SightingsService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  snackbarDucks(count) {
    let ducks = '🦆';

    if (count === 2) {
      ducks = '🦆🦆';
    } else if (count >= 3) {
      ducks = '🦆🦆🦆';
    }
    return ducks;
  }

  sendSighting() {
    let formOk = false;

    if (this.count !== undefined && this.count > 0 && this.description !== undefined && this.species !== undefined) {
      formOk = true;
    }

    if (formOk) {
      this.sightingsService.postSighting(this.count, this.description, this.species);
      const snackbarRef = this.snackBar.open('Sighting added!', this.snackbarDucks(this.count), {
        duration: 2000,
      });

      snackbarRef.afterDismissed().subscribe(() => {
        location.reload();
      });

    } else {
      this.snackBar.open('Invalid values!', '❌❌❌', {
        duration: 2000,
      });
    }


  }

}

