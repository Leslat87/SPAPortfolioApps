import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [

    HomeComponent,


  ],
  imports: [

    CommonModule,
    HomeRoutingModule,


  ],
  exports:[
    HomeComponent,


  ]
})
export class HomeModule { }
