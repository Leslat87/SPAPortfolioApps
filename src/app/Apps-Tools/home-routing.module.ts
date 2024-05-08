import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomePageComponent } from './home/home-page.component';



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
    path: 'images',
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
