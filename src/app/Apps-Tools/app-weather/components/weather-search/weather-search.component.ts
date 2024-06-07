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
  isLoading: boolean = false; // Estado de carga

  constructor(private weatherService: WeatherService, private fewDaysService: FewDaysService) { }

  async getWeather() {
    this.isLoading = true; // Mostrar spinner antes de iniciar la carga de datos
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
    } finally {
      this.isLoading = false; // Ocultar el spinner después de cargar los datos
    }
  }
}
