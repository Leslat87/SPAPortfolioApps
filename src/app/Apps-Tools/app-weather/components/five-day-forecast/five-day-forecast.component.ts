import { Component, Input, OnInit } from '@angular/core';
import { FiveDayForecastService } from '../../services/five-day-forecast.service';
import { FiveDayForecast } from '../../interfaces/five-day-forecast.interface';

@Component({
  selector: 'app-five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.css']
})
export class FiveDayForecastComponent implements OnInit {
  @Input() city: string = '';
  forecast: FiveDayForecast | null = null;

  constructor(private fiveDayForecastService: FiveDayForecastService) { }

  ngOnInit(): void {
    this.getFiveDayForecast();
  }

  getFiveDayForecast() {
    if (this.city) {
      this.fiveDayForecastService.getFiveDayForecast(this.city).subscribe(
        data => {
          this.forecast = data;
        },
        error => {
          console.error('Error fetching five-day forecast data:', error);
        }
      );
    }
  }
}
