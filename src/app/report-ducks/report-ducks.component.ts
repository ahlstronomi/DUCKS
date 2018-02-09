///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {SightingsService} from '../services/sightings.service';


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

  constructor(public sightingsService: SightingsService) {
  }

  ngOnInit() {
  }

  sendSighting() {
    let formOk = false;

    if (this.count !== undefined && this.description !== undefined && this.species !== undefined) {
      formOk = true;
    }

    if (formOk) {
      this.sightingsService.postSighting(this.count, this.description, this.species);
    }
  }

}

