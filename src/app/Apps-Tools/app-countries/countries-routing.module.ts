import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
<<<<<<< Updated upstream
import { CountryPageComponent } from './pages/country-page/country-page.component';


const routes: Routes = [
  {
    path: '',
    component: ByCountryPageComponent,
  },
  { path: 'country',
   component: ByCountryPageComponent
  },
  { path: 'capital',
   component: ByCapitalPageComponent
  },
  { path: 'region',
   component: ByRegionPageComponent
  },
  { path: 'by/:id',
  component: CountryPageComponent
  },
    ]
=======

import { CountryDetailPageComponent } from './pages/country-detail-page/country-detail-page.component';


const routes: Routes = [
  { path: 'by-country', component: ByCountryPageComponent },
  { path: 'by-capital', component: ByCapitalPageComponent },
  { path: 'by-region', component: ByRegionPageComponent },
  { path: 'country/:id', component: CountryDetailPageComponent },
  { path: '**', redirectTo: 'by-country' }
];
>>>>>>> Stashed changes


@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ],
})
export class CountriesRoutingModule { }
