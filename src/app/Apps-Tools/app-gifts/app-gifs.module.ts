import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CrudRoutingModule } from './gifs-routing.module';


import { CardListComponent } from './components/card-list/card-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MaterialModule } from '../../material/material.module';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { GifsPageComponent } from './pages/gifs-page/gifs-page.component';







@NgModule({
  declarations: [
    CardListComponent,
    SearchBoxComponent,
    GifsPageComponent,


  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrudRoutingModule,
    MaterialModule,
    PrimeNgModule,


  ],
  exports: [
    CardListComponent,
    SearchBoxComponent,
    GifsPageComponent,

  ]
})
export class AppGifsModule { }
