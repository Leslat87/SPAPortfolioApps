import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './app-principal/components/principal-page/principal-page.component';
import { AboutPageComponent } from '../shared/pages/about-page/about-page.component';
import { ContactPageComponent } from '../shared/pages/contact-page/contact-page.component';
import { Error404PageComponent } from '../shared/pages/error404-page/error404-page.component';







const routes: Routes = [
  {
    path: 'home',
    component: PrincipalPageComponent
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
    path: 'gifs',
    loadChildren: () => import('./app-gifs/app-gifs.module').then( m => m.AppGifsModule ),
  },
  {
    path: 'tasks',
    loadChildren: () => import('./app-tasks/app-tasks.module').then( m => m.AppTasksModule ),
  },
  {
    path: 'weather',
    loadChildren: () => import('./app-weather/app-weather.module').then( m => m.AppWeatherModule ),
  },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', component: Error404PageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
