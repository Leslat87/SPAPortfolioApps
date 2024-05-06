import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { GiftsPageComponent } from './pages/gifts-page/gifts-page.component';

// localhost:4200/heroes/
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'gifts', component:  GiftsPageComponent},

      //TODO: Pendiente de decision sobre el contenido
      // { path: 'search', component: SearchPageComponent },
      // { path: 'edit/:id', component: NewPageComponent },
      // { path: 'list', component: ListPageComponent },
      // { path: ':id', component: CrudPageComponent },
      // { path: '**', redirectTo: 'list' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
