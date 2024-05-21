// src/app/Apps-Tools/app-weather/components/weather-forecast/weather-forecast.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { ForecastResponse } from '../../interfaces/weather.interface';

@Component({
  selector: 'weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  @Input() city!: string;
  forecast?: ForecastResponse;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getForecast(this.city).subscribe(response => {
      this.forecast = response;
    });
  }

  getIconUrl(icon: string): string {
    return `http://openweathermap.org/img/wn/${icon}.png`;
  }
}
