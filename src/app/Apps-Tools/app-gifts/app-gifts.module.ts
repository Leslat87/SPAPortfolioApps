import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CrudRoutingModule } from './gifts-routing.module';


import { CardListComponent } from './components/card-list/card-list.component';
import { GiftsPageComponent } from './pages/gifts-page/gifts-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MaterialModule } from '../../material/material.module';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';







@NgModule({
  declarations: [
    CardListComponent,
    SearchBoxComponent,


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
   
  ]
})
export class AppGiftsModule { }
