import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-results',
  templateUrl: './weather-results.component.html',
  styleUrls: ['./weather-results.component.css']
})
export class WeatherResultsComponent implements OnInit {
  @Input() weather: any;
  @Input() forecast: any;
  @Input() chartData: any;
  currentDate: string = '';
  currentTime: string = '';
  hourlyChartOptions: any;
  dailyChartOptions: any;
  weeklyForecast: any[] = [];

  ngOnInit(): void {
    if (this.weather && this.forecast && this.chartData) {
      this.setDateTime();
      this.setHourlyChartOptions();
      this.setDailyChartOptions();
      this.setWeeklyForecast();
    }
  }

  setDateTime() {
    const now = new Date();
    this.currentDate = now.toLocaleDateString('default', { weekday: 'long', month: 'long', day: 'numeric' });
    this.currentTime = now.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit' });
  }

  setHourlyChartOptions() {
    const dates = this.chartData.slice(0, 8).map((entry: any) => new Date(entry.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const temperatures = this.chartData.slice(0, 8).map((entry: any) => entry.main.temp);

    this.hourlyChartOptions = {
      xAxis: {
        type: 'category',
        data: dates
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: temperatures,
        type: 'line',
        smooth: true
      }]
    };
  }

  setDailyChartOptions() {
    const dates = this.forecast.map((entry: any) => new Date(entry.dt * 1000).toLocaleDateString());
    const temperatures = this.forecast.map((entry: any) => entry.temp.day);

    this.dailyChartOptions = {
      xAxis: {
        type: 'category',
        data: dates
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: temperatures,
        type: 'line',
        smooth: true
      }]
    };
  }

  setWeeklyForecast() {
    this.weeklyForecast = this.forecast.map((data: any) => ({
      name: new Date(data.dt * 1000).toLocaleDateString('default', { weekday: 'short', month: 'short', day: 'numeric' }),
      temp: {
        day: data.temp.day,
        night: data.temp.night
      },
      weather: data.weather
    }));
  }
}
