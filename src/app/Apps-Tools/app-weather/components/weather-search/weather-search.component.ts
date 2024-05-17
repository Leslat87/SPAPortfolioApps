// src/app/Apps-Tools/app-weather/components/weather-search/weather-search.component.ts
import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherResponse } from '../../interfaces/weather.interface';

@Component({
  selector: 'weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent {
  city: string = '';
  weather?: WeatherResponse;

  constructor(private weatherService: WeatherService) {}

  searchWeather() {
    this.weatherService.getWeather(this.city).subscribe(response => {
      this.weather = response;
    });
  }
}
