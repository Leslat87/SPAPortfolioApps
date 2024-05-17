import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherResponse } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent {
  weatherData: WeatherResponse | null = null;
  error: string | null = null;

  constructor(private weatherService: WeatherService) {}

  search(city: string): void {
    this.weatherService.getWeather(city).subscribe(
      data => {
        this.weatherData = data;
        this.error = null;
      },
      err => {
        this.error = err.message;
        this.weatherData = null;
      }
    );
  }
}
