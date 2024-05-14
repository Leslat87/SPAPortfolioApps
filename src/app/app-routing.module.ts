import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

// import { canActivateGuard, canMatchGuard } from './auth/guards/auth.guard';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';



// dominioweb.com /
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../app/Apps-Tools/PrincipalPage/principalpage.module').then(m => m.PrincipalPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('../app/Apps-Tools/app-calculator/app-calculator.module').then( m => m.AppCalculatorModule ),
  },
  {
    path: 'country',
    loadChildren: () => import('../app/Apps-Tools/app-countries/app-countries.module').then( m => m.AppCountriesModule ),
  },
  {
    path: 'crud',
    loadChildren: () => import('../app/Apps-Tools/app-crud/app-crud.module').then( m => m.AppCrudModule ),
  },
  {
    path: 'gifts',
    loadChildren: () => import('../app/Apps-Tools/app-gifts/app-gifts.module').then( m => m.AppGiftsModule ),
  },
  {
    path: 'tasks',
    loadChildren: () => import('../app/Apps-Tools/app-tasks/app-taskslist.module').then( m => m.AppTasksListModule ),
  },
  {
    path: 'weather',
    loadChildren: () => import('../app/Apps-Tools/app-weather/app-weather.module').then( m => m.AppWeatherModule ),
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
    redirectTo: 'home',
    pathMatch: 'full',
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
