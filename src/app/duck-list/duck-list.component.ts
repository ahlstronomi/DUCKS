import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import {SightingsService} from '../services/sightings.service';

@Component({
  selector: 'app-duck-list',
  templateUrl: './duck-list.component.html',
  styleUrls: ['./duck-list.component.scss']
})
export class DuckListComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id', 'species', 'description', 'dateTime', 'count'];

  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;

  constructor(public sightingsService: SightingsService) {
  }

  ngOnInit() {
    this.sightingsService.getAllSightings().subscribe(
      data => {
        console.log(data);
        this.dataSource = new MatTableDataSource(data);
      }
    );
  }

  ngAfterViewInit() {
    this.sightingsService.getAllSightings().subscribe(
      data => {
        console.log(data);
    this.dataSource.sort = this.sort;
      }
    );
  }
}



