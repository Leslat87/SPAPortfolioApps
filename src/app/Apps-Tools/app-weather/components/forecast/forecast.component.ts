import { Component, Input, OnChanges } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnChanges {
  @Input() forecastData: any;
  options: EChartsOption = {};

  ngOnChanges(): void {
    if (this.forecastData && this.forecastData.list) {
      this.setOptions();
    }
  }

  setOptions(): void {
    const dates = this.forecastData.list.map((entry: any) => new Date(entry.dt * 1000).toLocaleTimeString());
    const temperatures = this.forecastData.list.map((entry: any) => entry.main.temp);

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
