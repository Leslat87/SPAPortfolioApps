// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< Updated upstream
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

// import { canActivateGuard, canMatchGuard } from './auth/guards/auth.guard';
=======

>>>>>>> Stashed changes
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
<<<<<<< Updated upstream
  //  {
  //    path: 'auth',
  //     loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  //  },
  {
      path: '',
      loadChildren: () => import('./Apps-Tools/home.module').then( m => m.HomeModule ),
      // canActivate: [canActivateGuard],
      // canMatch: [canMatchGuard],
  },
  {
      path: '404',
      component: Error404PageComponent,
  },
  {
      path: 'about',
      component: AboutPageComponent,
  },
  {
      path: 'contact',
      component: ContactPageComponent,
  },
  {
      path: '**',
      redirectTo: '',
  }
=======
  { path: 'home', loadChildren: () => import('./Apps-Tools/app-principal/app-principal.module').then(m => m.AppPrincipalModule) },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'calculator', loadChildren: () => import('./Apps-Tools/app-calculator/app-calculator.module').then(m => m.AppCalculatorModule) },
  { path: 'countries', loadChildren: () => import('./Apps-Tools/app-countries/app-countries.module').then(m => m.AppCountriesModule) },
  { path: 'crud', loadChildren: () => import('./Apps-Tools/app-crud/app-crud.module').then(m => m.AppCrudModule) },
  { path: 'gifs', loadChildren: () => import('./Apps-Tools/app-gifs/app-gifs.module').then(m => m.AppGifsModule) },
  { path: 'tasks', loadChildren: () => import('./Apps-Tools/app-tasks/app-taskslist.module').then(m => m.AppTasksListModule) },
  { path: 'weather', loadChildren: () => import('./Apps-Tools/app-weather/app-weather.module').then(m => m.AppWeatherModule) },
  { path: '**', component: Error404PageComponent },
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
