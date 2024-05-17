import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



import { MaterialModule } from '../../material/material.module';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';


import { GifsRoutingModule } from './gifs-routing.module';
import { GifsPageComponent } from './pages/gifs-page/gifs-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GifsService } from './services/gifs.service';









@NgModule({
  declarations: [
    GifsPageComponent,
    CardListComponent,
    SearchBoxComponent,

  ],
  imports: [
    CommonModule,
    GifsRoutingModule,
    MaterialModule,
    PrimeNgModule,
    ReactiveFormsModule,

  ],
  exports: [
    GifsPageComponent,
    CardListComponent,
    SearchBoxComponent,
  ],
  providers: [
    GifsService,
  ]
})
export class AppGifsModule { }
