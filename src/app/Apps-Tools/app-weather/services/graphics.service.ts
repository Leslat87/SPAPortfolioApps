import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Graphics } from '../interfaces/data-graphics.interface';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {
  private baseUrl: string = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  private apikey: string = '&units=metric&appid=06a77019936341ff3d1d78c794d00461';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Graphics> {
    return this.http.get<Graphics>(`${this.baseUrl}${city}${this.apikey}`);
  }
}
