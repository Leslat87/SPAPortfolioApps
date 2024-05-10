import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MaterialModule } from '../material/material.module';



import { HomeComponent } from './home.component';
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
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CrudImagePipe } from './pipes/crud-image.pipe';







@NgModule({
  declarations: [

    CalculatorPageComponent,
    HistoryPageComponent,
    ByCountryPageComponent,
    ByCapitalPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CrudPageComponent,
    GiftsPageComponent,
    KanbanPageComponent,
    HomeComponent,
    HomePageComponent,

    //Pipes Y component
    CardComponent,
    CardListComponent,
    CrudImagePipe,
    ConfirmDialogComponent,
    CountryTableComponent,
    SearchBoxComponent,









  ],
  imports: [

    CommonModule,
    HomeRoutingModule,
    PrimeNgModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,

  ],
  exports:[
    CalculatorPageComponent,
    HistoryPageComponent,
    ByCountryPageComponent,
    ByCapitalPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CrudPageComponent,
    GiftsPageComponent,
    KanbanPageComponent,
    HomeComponent,
    HomePageComponent,

    //Pipes Y component
    CardComponent,
    CardListComponent,
    CrudImagePipe,
    ConfirmDialogComponent,
    CountryTableComponent,
    SearchBoxComponent,

  ],
  bootstrap: [ListPageComponent],
})
export class HomeModule { }
