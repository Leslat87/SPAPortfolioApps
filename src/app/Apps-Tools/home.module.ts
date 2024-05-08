import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MaterialModule } from '../material/material.module';

import { CountryPageComponent } from './app-countries/pages/country-page/country-page.component';
import { GiftsPageComponent } from './app-gifts/pages/gifts-page/gifts-page.component';
import { CommonModule } from '@angular/common';

import { AppCalculatorModule } from './app-calculator/app-calculator.module';
import { AppCountriesModule } from './app-countries/app-countries.module';

import { AppGiftsModule } from './app-gifts/app-gifts.module';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './home/home-page.component';







@NgModule({
  declarations: [



    CountryPageComponent,

    GiftsPageComponent,
    HomePageComponent,
    HomeComponent,





  ],
  imports: [

    CommonModule,
    HomeRoutingModule,
    PrimeNgModule,
    MaterialModule,
    AppCalculatorModule,
    AppCountriesModule,

    AppGiftsModule,


  ],
  exports:[
    HomeComponent,
    HomePageComponent,

    CountryPageComponent,

    GiftsPageComponent,

  ]
})
export class HomeModule { }
