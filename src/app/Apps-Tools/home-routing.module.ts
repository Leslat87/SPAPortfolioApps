import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './app-principal/components/principal-page/principal-page.component';
import { AboutPageComponent } from '../shared/pages/about-page/about-page.component';
import { ContactPageComponent } from '../shared/pages/contact-page/contact-page.component';
import { Error404PageComponent } from '../shared/pages/error404-page/error404-page.component';
import { AuthGuard } from '../auth/guards/auth.guard'; // Importar el guard de autenticación

const routes: Routes = [
  {
    path: 'home',
    component: PrincipalPageComponent,
    canActivate: [AuthGuard] // Proteger la ruta 'home' con el guard
  },
  {
    path: 'calculator/:id',
    loadChildren: () => import('./app-calculator/app-calculator.module').then(m => m.AppCalculatorModule),
    canActivate: [AuthGuard], // Proteger la ruta 'calculator' con el guard
    data: { role: 'User' }
  },
  {
    path: 'country',
    loadChildren: () => import('./app-countries/app-countries.module').then(m => m.AppCountriesModule),
    canActivate: [AuthGuard], // Proteger la ruta 'country' con el guard
    data: { role: 'Admin' }
  },
  {
    path: 'crud',
    loadChildren: () => import('./app-crud/app-crud.module').then(m => m.AppCrudModule),
    canActivate: [AuthGuard], // Proteger la ruta 'crud' con el guard
    data: { role: 'User' }
  },
  {
    path: 'gifs',
    loadChildren: () => import('./app-gifs/app-gifs.module').then(m => m.AppGifsModule),
    canActivate: [AuthGuard], // Proteger la ruta 'gifs' con el guard
    data: { role: 'User' }
  },
  {
    path: 'tasks/:id',
    loadChildren: () => import('./app-tasks/app-tasks.module').then(m => m.AppTasksModule),
    canActivate: [AuthGuard], // Proteger la ruta 'tasks' con el guard
    data: { role: 'User' }
  },
  {
    path: 'weather',
    loadChildren: () => import('./app-weather/app-weather.module').then(m => m.AppWeatherModule),
    canActivate: [AuthGuard], // Proteger la ruta 'weather' con el guard
    data: { role: 'Admin' }
  },
  { path: 'about', component: AboutPageComponent, canActivate: [AuthGuard], data: { role: 'User' } },
  { path: 'contact', component: ContactPageComponent, canActivate: [AuthGuard], data: { role: 'User' } },
  { path: '**', component: Error404PageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
