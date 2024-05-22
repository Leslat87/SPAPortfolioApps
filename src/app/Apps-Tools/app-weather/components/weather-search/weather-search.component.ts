import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FewDaysService } from '../../services/few-days.service';
import { GraphicsService } from '../../services/graphics.service';

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

  constructor(
    private weatherService: WeatherService,
    private fewDaysService: FewDaysService,
    private graphicsService: GraphicsService
  ) { }

  getWeather() {
    if (this.city) {
      this.weatherService.getWeather(this.city).subscribe(data => {
        this.weather = data;
      });

      this.fewDaysService.getWeather(this.city).subscribe(forecastData => {
        this.forecast = forecastData.list;
      });

      this.graphicsService.getWeather(this.city).subscribe(chartData => {
        this.chartData = chartData.list;
      });
    }
  }
}
