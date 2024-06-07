import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { WeatherResultsComponent } from './components/weather-results/weather-results.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from '../../shared/shared.module';
import { FiveDayForecastComponent } from './components/five-day-forecast/five-day-forecast.component';


@NgModule({
  declarations: [
    WeatherSearchComponent,
    WeatherResultsComponent,
    ForecastComponent,
    FiveDayForecastComponent,
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') })
  ]
})
export class AppWeatherModule { }
