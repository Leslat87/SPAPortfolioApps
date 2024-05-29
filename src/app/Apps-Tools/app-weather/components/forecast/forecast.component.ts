import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Input() forecastData: any;
  options: any;  // Definimos la propiedad options

  ngOnInit(): void {
    if (this.forecastData) {
      this.setOptions();
    }
  }

  setOptions() {
    const dates = this.forecastData.slice(0, 8).map((entry: any) => new Date(entry.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const temperatures = this.forecastData.slice(0, 8).map((entry: any) => entry.main.temp);

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

