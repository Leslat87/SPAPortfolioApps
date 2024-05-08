import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CrudPageComponent } from './pages/crud-page/images-page.component';

// localhost:4200/heroes/
const routes: Routes = [
  {
    path: '',
    component: CrudPageComponent,
  },
  {
    path: 'list',
    component: ListPageComponent,
  },
  { path: 'new-page',
   component: NewPageComponent
  },
  { path: 'search',
  component: SearchPageComponent
  },
  { path: 'edit/:id',
  component: NewPageComponent
  },
  { path: ':id',
  component: CrudPageComponent
  },
  { path: '**', redirectTo: 'list' },
    ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
