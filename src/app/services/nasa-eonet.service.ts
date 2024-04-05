import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaEonetService {
  private apiUrl = 'https://eonet.gsfc.nasa.gov/api/v2.1/events';

  http= inject(HttpClient);

  getEvents(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
