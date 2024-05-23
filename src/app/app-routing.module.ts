// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { CountryDetailPageComponent } from './Apps-Tools/app-countries/pages/country-detail-page/country-detail-page.component';

const routes: Routes = [

  { path: 'home', loadChildren: () => import('./Apps-Tools/app-principal/app-principal.module').then(m => m.AppPrincipalModule) },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  {
    path: 'countries/:countryCode',
    component: CountryDetailPageComponent
  },
  { path: 'calculator', loadChildren: () => import('./Apps-Tools/app-calculator/app-calculator.module').then(m => m.AppCalculatorModule) },
  { path: 'countries', loadChildren: () => import('./Apps-Tools/app-countries/app-countries.module').then(m => m.AppCountriesModule) },
  { path: 'crud', loadChildren: () => import('./Apps-Tools/app-crud/app-crud.module').then(m => m.AppCrudModule) },
  { path: 'gifs', loadChildren: () => import('./Apps-Tools/app-gifs/app-gifs.module').then(m => m.AppGifsModule) },
  { path: 'tasks', loadChildren: () => import('./Apps-Tools/app-tasks/app-tasks.module').then(m => m.AppTasksModule) },
  { path: 'weather', loadChildren: () => import('./Apps-Tools/app-weather/app-weather.module').then(m => m.AppWeatherModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
