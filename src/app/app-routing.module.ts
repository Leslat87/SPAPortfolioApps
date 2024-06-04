import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { CountryDetailPageComponent } from './Apps-Tools/app-countries/pages/country-detail-page/country-detail-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./Apps-Tools/app-principal/app-principal.module').then(m => m.AppPrincipalModule), canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'about', component: AboutPageComponent, canActivate: [AuthGuard], data: { role: 'User' } },
  { path: 'contact', component: ContactPageComponent, canActivate: [AuthGuard], data: { role: 'User' } },
  { path: 'calculator', loadChildren: () => import('./Apps-Tools/app-calculator/app-calculator.module').then(m => m.AppCalculatorModule), canActivate: [AuthGuard], data: { role: 'User' } },
  { path: 'countries', loadChildren: () => import('./Apps-Tools/app-countries/app-countries.module').then(m => m.AppCountriesModule), canActivate: [AuthGuard], data: { role: 'Admin' } },
  { path: 'crud', loadChildren: () => import('./Apps-Tools/app-crud/app-crud.module').then(m => m.AppCrudModule), canActivate: [AuthGuard], data: { role: 'User' } },
  { path: 'gifs', loadChildren: () => import('./Apps-Tools/app-gifs/app-gifs.module').then(m => m.AppGifsModule), canActivate: [AuthGuard], data: { role: 'User' } },
  { path: 'tasks', loadChildren: () => import('./Apps-Tools/app-tasks/app-tasks.module').then(m => m.AppTasksModule), canActivate: [AuthGuard], data: { role: 'User' } },
  { path: 'weather', loadChildren: () => import('./Apps-Tools/app-weather/app-weather.module').then(m => m.AppWeatherModule), canActivate: [AuthGuard], data: { role: 'Admin' } },
  { path: 'countries/:countryCode', component: CountryDetailPageComponent, canActivate: [AuthGuard], data: { role: 'Admin' } },
  { path: '**', component: Error404PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
