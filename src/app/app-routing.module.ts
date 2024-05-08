import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

// import { canActivateGuard, canMatchGuard } from './auth/guards/auth.guard';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';



// dominioweb.com /
const routes: Routes = [
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
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
