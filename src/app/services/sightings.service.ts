import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SightingsService {
  serverUrl = 'http://localhost:8081/sightings';
  dateTime = new Date();
  count: number;
  description: string;
  species: string;

  constructor(private http: HttpClient) {
  }

  getAllSightings() {
    return this.http.get(this.serverUrl);
  }

  postSighting(userCount, userDescription, userSpecies) {

    const body = {
      count: this.count = userCount,
      description: this.description = userDescription,
      species: this.species = userSpecies,
      dateTime: this.dateTime
    };
    console.log(body);
    this.http.post(this.serverUrl, body).subscribe(data => {
      console.log(data);
    });

  }
}
