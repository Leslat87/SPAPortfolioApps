// src/app/Apps-Tools/app-crud/crud-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudPageComponent } from './pages/crud-page/crud-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  { path: 'list', component: ListPageComponent },
  { path: 'new', component: NewPageComponent },
  { path: 'edit/:id', component: NewPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: ':id', component: CrudPageComponent }, // Ruta para la página de detalles
  { path: '', redirectTo: 'list', pathMatch: 'full' }, // Redirigir a 'list' como página de inicio
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
