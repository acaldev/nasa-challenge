import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoverPhotoResponse } from '..';

@Injectable()
export class NasaService {
  private readonly apiURL: string = 'https://api.nasa.gov/mars-photos/api/v1';
  private readonly apiKey = environment.apiKey;
  constructor(private http: HttpClient) {}

  getRovers(name: string): Observable<RoverPhotoResponse> {
    return this.http.get<RoverPhotoResponse>(
      `${this.apiURL}/rovers/${name}/photos?sol=10&api_key=${this.apiKey}`
    );
  }
}
