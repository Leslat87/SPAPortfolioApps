import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { WeatherPageComponent } from './components/weather-page/weather-page.component';

// localhost:4200/heroes/
const routes: Routes = [
  { path: '', component: WeatherPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
