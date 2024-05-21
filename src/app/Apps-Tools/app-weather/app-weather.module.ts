// src/app/Apps-Tools/app-weather/app-weather.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material/material.module';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { WeatherTodayComponent } from './components/weather-today/weather-today.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    WeatherSearchComponent,
    WeatherTodayComponent,
    WeatherForecastComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    WeatherRoutingModule,
    FormsModule,
    
  ],
  exports: [
    WeatherSearchComponent,
    WeatherTodayComponent,
    WeatherForecastComponent
  ],
  providers: [
    WeatherService,
  ]

})
export class AppWeatherModule { }
