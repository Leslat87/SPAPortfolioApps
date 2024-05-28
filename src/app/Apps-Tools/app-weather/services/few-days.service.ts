import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Newweather } from '../interfaces/new-interface.interface';

@Injectable({
  providedIn: 'root'
})
export class FewDaysService {
  private baseUrl: string = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  private apikey: string = '&units=metric&appid=06a77019936341ff3d1d78c794d00461';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Newweather> {
    return this.http.get<Newweather>(`${this.baseUrl}${city}${this.apikey}`);
  }
}
