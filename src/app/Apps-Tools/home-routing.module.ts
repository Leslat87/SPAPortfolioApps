import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomePageComponent } from './home/home-page.component';
import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CrudPageComponent } from './pages/crud-page/images-page.component';
import { GiftsPageComponent } from './pages/gifts-page/gifts-page.component';
import { KanbanPageComponent } from './pages/kanban-page/kanban-page.component';



const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'calculator',
    component: CalculatorPageComponent
  },
  { path: 'history',
    component: HistoryPageComponent
  },
  {
    path: 'country',
    component: ByCountryPageComponent
  },
  {
    path: 'capital',
    component: ByCapitalPageComponent
  },
  {
    path: 'region',
    component: ByRegionPageComponent
  },
  {
    path: 'by/:id',
    component: CountryPageComponent
  },
  {
    path: 'list',
    component: ListPageComponent
  },
  {
    path: 'new-page',
    component: NewPageComponent
  },
  {
    path: 'search',
    component: SearchPageComponent
  },
  {
    path: 'edit/:id',
    component: NewPageComponent
  },
  {
    path: ':id',
    component: CrudPageComponent
  },
  {
    path: 'gifts',
    component:  GiftsPageComponent
  },
  {
  path:'kanban',
  component: KanbanPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
