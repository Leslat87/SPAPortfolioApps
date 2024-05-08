import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculatorPageComponent } from './app-calculator/pages/calculator-page/calculator-page.component';
import { CountryPageComponent } from './app-countries/pages/country-page/country-page.component';
import { CrudPageComponent } from './app-crud/pages/crud-page/crud-page.component';
import { GiftsPageComponent } from './app-gifts/pages/gifts-page/gifts-page.component';
import { HomePageComponent } from './home/home-page.component';
import { AppCountriesModule } from './app-countries/app-countries.module';



const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'calculator',
    loadChildren: () => import('./app-calculator/app-calculator.module').then( m => m.AppCalculatorModule ),
  },
  {
    path: 'country',
    loadChildren: () => import('./app-countries/app-countries.module').then( m => m.AppCountriesModule ),
  },
  {
    path: 'crud',
    loadChildren: () => import('./app-crud/app-crud.module').then( m => m.AppCrudModule ),
  },
  {
    path: 'gifts',
    loadChildren: () => import('./app-gifts/app-gifts.module').then( m => m.AppGiftsModule ),
  },
  // {
  //   path: 'tasks',
  //   component: TasksPageComponent
  // },
  // {
  //   path: 'weather',
  //   component: WeatherPageComponent
  // },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
