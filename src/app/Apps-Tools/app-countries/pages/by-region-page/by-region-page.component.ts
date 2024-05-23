// src/app/Apps-Tools/app-countries/pages/by-region-page/by-region-page.component.ts
import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';
import { Router } from '@angular/router';
import { Region } from '../../interfaces/region.types';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor(private countriesService: CountriesService, private router: Router) {}

  ngOnInit(): void {}

  searchByRegion(region: Region): void {
    this.isLoading = true;
    this.countriesService.searchRegion(region)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      }, () => {
        this.countries = [];
        this.isLoading = false;
      });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
