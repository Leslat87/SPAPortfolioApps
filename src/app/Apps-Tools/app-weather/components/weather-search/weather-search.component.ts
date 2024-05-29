import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FewDaysService } from '../../services/few-days.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent {
  city: string = '';
  weather: any;
  forecast: any;
  chartData: any;

  constructor(private weatherService: WeatherService, private fewDaysService: FewDaysService) { }

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weather = data;
        this.fewDaysService.getWeather(this.city).subscribe({
          next: (forecastData) => {
            this.forecast = forecastData;
            this.chartData = forecastData.list;
          },
          error: (error) => {
            console.error('Error fetching forecast data:', error);
          }
        });
      },
      error: (error) => {
        console.error('Error fetching weather data:', error);
      }
    });
  }
}
