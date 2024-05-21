import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CountriesRoutingModule } from './countries-routing.module';


import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';





@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
<<<<<<< Updated upstream
    
=======
    CountryCardComponent,
    CountryDetailPageComponent,
>>>>>>> Stashed changes
    CountryTableComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CountriesRoutingModule,
    SharedModule,
    MaterialModule,
    PrimeNgModule,
  ],
  exports: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
<<<<<<< Updated upstream

    CountryTableComponent,
=======
    CountryCardComponent,
    CountryDetailPageComponent,
    CountryTableComponent,
  ],
  providers: [
    CountriesService
>>>>>>> Stashed changes
  ]
})
export class AppCountriesModule { }
