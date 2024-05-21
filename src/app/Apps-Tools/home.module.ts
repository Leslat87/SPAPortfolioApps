import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MaterialModule } from '../material/material.module';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [

    HomeComponent,





  ],
  imports: [

    CommonModule,
    HomeRoutingModule,
    PrimeNgModule,
    MaterialModule,



  ],
  exports:[
    HomeComponent,


  ]
})
export class HomeModule { }
