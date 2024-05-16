import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

<<<<<<<< Updated upstream:src/app/Apps-Tools/app-gifs/app-gifts.module.ts
import { CrudRoutingModule } from './gifts-routing.module';


========
>>>>>>>> Stashed changes:src/app/Apps-Tools/app-gifs/app-gifs.module.ts
import { CardListComponent } from './components/card-list/card-list.component';
import { GiftsPageComponent } from './pages/gifts-page/gifts-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MaterialModule } from '../../material/material.module';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
<<<<<<<< Updated upstream:src/app/Apps-Tools/app-gifs/app-gifts.module.ts
========
import { GifsPageComponent } from './pages/gifs-page/gifs-page.component';
import { GifsRoutingModule } from './gifs-routing.module';
>>>>>>>> Stashed changes:src/app/Apps-Tools/app-gifs/app-gifs.module.ts







@NgModule({
  declarations: [
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
    CardListComponent,
    SearchBoxComponent,
   
  ]
})
export class AppGiftsModule { }
