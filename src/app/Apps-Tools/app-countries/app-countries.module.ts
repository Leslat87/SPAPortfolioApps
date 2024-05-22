import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CountriesRoutingModule } from './countries-routing.module';


import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { SharedModule } from '../../shared/shared.module';
import { CountryDetailPageComponent } from './pages/country-detail-page/country-detail-page.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountriesService } from './services/countries.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryCardComponent,
    CountryDetailPageComponent,
    CountryTableComponent,

  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryCardComponent,
    CountryDetailPageComponent,
    CountryTableComponent,
  ],
  providers: [
    CountriesService
  ]
})
export class AppCountriesModule { }
