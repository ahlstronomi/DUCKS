import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import {SightingsService} from '../services/sightings.service';

@Component({
  selector: 'app-duck-list',
  templateUrl: './duck-list.component.html',
  styleUrls: ['./duck-list.component.scss']
})
export class DuckListComponent implements OnInit, AfterViewInit, Sighting {
  id: string;
  species: string;
  description: string;
  dateTime: string;
  count: number;
  displayedColumns = ['id', 'species', 'description', 'dateTime', 'count'];

  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  sightingsData: any;

  constructor(public sightingsService: SightingsService) {
  }

  ngOnInit() {
    this.getData();
  }

  ngAfterViewInit() {
    this.sortData();
  }

  getData() {
    this.sightingsService.getAllSightings().subscribe(
      response => {
        console.log(response);
        this.sightingsData = response;
        this.dataSource = new MatTableDataSource(this.sightingsData);
      }
    );
  }

  sortData() {
    this.sightingsService.getAllSightings().subscribe(
      data => {
        console.log(data);
        this.dataSource.sort = this.sort;
      }
    );
  }

  updateList() {
    this.getData();
    this.sortData();
  }

}


export interface Sighting {
  sort: MatSort;
  id: string;
  species: string;
  description: string;
  dateTime: string;
  count: number;
}



