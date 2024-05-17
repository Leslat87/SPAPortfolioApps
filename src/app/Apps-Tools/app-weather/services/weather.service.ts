// src/app/Apps-Tools/app-weather/services/weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherResponse, ForecastResponse } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey: string = 'YOUR_API_KEY'; // Reemplaza con tu API key
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<WeatherResponse> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', 'metric');

    return this.http.get<WeatherResponse>(`${this.apiUrl}/weather`, { params });
  }

  getForecast(city: string): Observable<ForecastResponse> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', 'metric')
      .set('cnt', '7');

    return this.http.get<ForecastResponse>(`${this.apiUrl}/forecast/daily`, { params });
  }
}
