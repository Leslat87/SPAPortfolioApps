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

  async getWeather() {
    try {
      const weatherData = await this.weatherService.getWeather(this.city).toPromise();
      this.weather = weatherData;
      const forecastData = await this.fewDaysService.getWeather(this.city).toPromise();
      if (forecastData && forecastData.list) {
        this.forecast = forecastData;
        this.chartData = forecastData.list;
      } else {
        console.error('Forecast data is undefined or does not contain a list.');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
}
