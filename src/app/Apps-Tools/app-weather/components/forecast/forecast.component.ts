import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Input() forecastData: any;

  options: any;

  ngOnInit(): void {
    if (this.forecastData) {
      this.updateChartData(this.forecastData);
    }
  }

  updateChartData(forecast: any) {
    const dates = forecast.list.slice(0, 8).map((entry: any) => new Date(entry.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const temperatures = forecast.list.slice(0, 8).map((entry: any) => entry.main.temp);

    this.options = {
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
}
