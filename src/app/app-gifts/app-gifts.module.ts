import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CrudRoutingModule } from './gifts-routing.module';
import { MaterialModule } from '../material/material.module';

import { CardListComponent } from './components/card-list/card-list.component';
import { GiftsPageComponent } from './pages/gifts-page/gifts-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';





@NgModule({
  declarations: [
    CardListComponent,
    SearchBoxComponent,
    GiftsPageComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrudRoutingModule,
    MaterialModule,

  ]
})
export class AppGiftsModule { }
