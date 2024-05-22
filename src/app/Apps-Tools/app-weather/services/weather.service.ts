import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private apikey: string = '&units=metric&appid=06a77019936341ff3d1d78c794d00461';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
    return this.http.get<Weather>(`${this.baseUrl}${city}${this.apikey}`);
  }
}
