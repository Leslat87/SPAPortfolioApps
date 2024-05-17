// src/app/Apps-Tools/app-weather/weather-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';

const routes: Routes = [
  { path: 'search', component: WeatherSearchComponent },
  { path: 'forecast/:city', component: WeatherForecastComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
