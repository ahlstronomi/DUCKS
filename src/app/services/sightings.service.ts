import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SightingsService {
  serverUrl = 'http://localhost:8081/sightings';
  test = 'test test test';

  constructor(private http: HttpClient) { }

  getAllSightings() {
    return this.http.get(this.serverUrl);
  }
}
