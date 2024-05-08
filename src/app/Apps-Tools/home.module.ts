import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MaterialModule } from '../material/material.module';

import { CalculatorPageComponent } from './app-calculator/pages/calculator-page/calculator-page.component';
import { CountryPageComponent } from './app-countries/pages/country-page/country-page.component';
import { CrudPageComponent } from './app-crud/pages/crud-page/crud-page.component';
import { GiftsPageComponent } from './app-gifts/pages/gifts-page/gifts-page.component';
import { CommonModule } from '@angular/common';

import { AppCalculatorModule } from './app-calculator/app-calculator.module';
import { AppCountriesModule } from './app-countries/app-countries.module';
import { AppCrudModule } from './app-crud/app-crud.module';
import { AppGiftsModule } from './app-gifts/app-gifts.module';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './home/home-page.component';






@NgModule({
  declarations: [

    HomePageComponent,

    CountryPageComponent,
    CrudPageComponent,
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
    AppCrudModule,
    AppGiftsModule,


  ],
  exports:[
    HomeComponent,
    HomePageComponent,

    CountryPageComponent,
    CrudPageComponent,
    GiftsPageComponent,

  ]
})
export class HomeModule { }
